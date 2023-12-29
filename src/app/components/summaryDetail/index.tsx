import { yupResolver } from '@hookform/resolvers/yup';
import { InfoOutlined } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Link, Tooltip, Typography } from "@mui/material";
import moment from 'moment';
import { Reducer, useContext, useEffect, useReducer } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { DownloadSummaryIcon, EditIcon } from '../../../assets/svgs';
import { Attachment, MetaType, StatusType, useGetSignedUrlMutation, useJobSummaryLazyQuery, useUpdateJobSummaryMutation } from '../../../generated';
import { GRAPHQL_QUERY_POLICY, NO_FILES_FOUND, SUMMARY_DETAIL, TOOLTIP_POPPER_PROPS, UPDATE_PROMPT_FAILURE, UPDATE_PROMPT_SUCCESS } from '../../constants';
import { AppContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import { PromptsInterface } from '../../interfaceTypes';
import { fileIconBox } from '../../theme/styleConstants';
import { promptSchema } from '../../validationSchema';
import { Alert } from '../common/Alert';
import { CustomModal } from '../common/CustomModal';
import { getFileIcon } from '../common/FileIcon';
import { DocumentViewer } from '../dashboard/DocumentViewer';
import { Prompts } from '../dashboard/Prompts';
import { CustomAlert } from './CustomAlert';
import { GeneratedFilesList } from './GeneratedFilesList';
import { SummaryDetailHeader } from './SummaryDetailHeader';
import { SummaryDetailsAction, SummaryDetailsActionType, SummaryDetailsState, initialState, reducer } from './SummaryDetailReducer';
import { SummaryInfoDetails } from './SummaryInfoDetails';
import { UpdateSummaryFile } from './UpdateSummaryFile';

export const SummaryDetail = () => {
  const [state, dispatch] = useReducer<Reducer<SummaryDetailsState, SummaryDetailsAction>>(reducer, initialState);
  const { editableFile, fileStatus, inputSummaryFile, signedUrl, summaryText, currentJobSummary } = state

  const { isOpen, dispatch: appDispatch } = useContext(AppContext)

  const params = useParams();
  const { id } = params;
  const { title: inputFileTitle, url: inputFileUrl } = inputSummaryFile ?? {}

  const methods = useForm<PromptsInterface>({
    mode: 'all',
    resetOptions: {
      keepIsSubmitted: true
    },
    resolver: yupResolver(promptSchema)
  });

  const { handleSubmit, setValue } = methods;

  const [updateJobSummary] = useUpdateJobSummaryMutation({
    onError() {
      Alert.error(UPDATE_PROMPT_FAILURE);
    },

    onCompleted() {
      Alert.success(UPDATE_PROMPT_SUCCESS);
      dispatch({ type: SummaryDetailsActionType.SET_EDITABLE_FILE, editableFile: !editableFile });
    }
  });

  const [getSignedUrl] = useGetSignedUrlMutation({
    onError() {
      Alert.error(UPDATE_PROMPT_FAILURE);
    },

    onCompleted(data) {
      if (data) {
        const { getSignedUrl } = data
        dispatch({ type: SummaryDetailsActionType.SET_SIGNED_URL, signedUrl: getSignedUrl });
      }
    }
  });

  const [getJobSummary, { loading }] = useJobSummaryLazyQuery({
    ...GRAPHQL_QUERY_POLICY,
    variables: undefined,

    onError() {
      Alert.error(NO_FILES_FOUND);
    },

    onCompleted(data) {
      const { jobSummary } = data;
      const { jobSummary: jobSummaryObject } = jobSummary
      const { status } = jobSummaryObject ?? {}

      if (status) {
        dispatch({ type: SummaryDetailsActionType.SET_FILE_STATUS, fileStatus: status });
      }

      dispatch({ type: SummaryDetailsActionType.SET_CURRENT_JOB_SUMMARY, currentJobSummary: jobSummaryObject });

      if (jobSummary) {
        const parsedPrompts = JSON.parse(jobSummary.jobSummary.prompt);
        const modifiedPrompts: { [x: string]: string }[] = [];
        Object.keys(parsedPrompts).map((prompt) => {
          modifiedPrompts.push({ prompt: parsedPrompts[prompt] });
        });
        setValue('prompts', modifiedPrompts);

        if (jobSummary.jobSummary.files) {
          const { files } = jobSummary.jobSummary;
          const filteredInput = files.filter((file) => file.metaType === MetaType.InputFile);
          dispatch({ type: SummaryDetailsActionType.SET_INPUT_SUMMARY_FILE, inputSummaryFile: filteredInput[0] });

          const filteredOutput = files.filter((file) => file.metaType === MetaType.SummaryFile);
          const outputFilesOrder = filteredOutput.map(outputFile => {
            return { ...outputFile, createdAt: new Date(outputFile.createdAt) };
          });

          const outputFilesOrderSort = outputFilesOrder.sort(
            (firstFile, secondFile) => moment(secondFile.createdAt).unix() - moment(firstFile.createdAt).unix(),
          );

          dispatch({ type: SummaryDetailsActionType.SET_OUTPUT_SUMMARY_FILE, outputSummaryFiles: outputFilesOrderSort });
        }
      }
    }
  });

  const onSubmit = async (data: PromptsInterface) => {
    const { prompts } = data;
    const modifiedPrompts = prompts?.map((obj: { prompt: string }, index: number) => {
      const newKey = `prompt${index + 1}`;
      return { [newKey]: obj.prompt };
    });

    const prompt = {};

    for (let i = 0; i < modifiedPrompts.length; i++) {
      Object.assign(prompt, modifiedPrompts[i]);
    }

    if (id) {
      await updateJobSummary({
        variables: {
          updateJobSummaryInput: {
            id,
            prompt: !!prompt ? JSON.stringify(prompt) : undefined,
          }
        }
      });
    }
  };

  useEffect(() => {
    localStorage.removeItem(SUMMARY_DETAIL);
    if (id) {
      getJobSummary({
        variables: {
          jobSummaryId: id
        }
      });
    }
    // eslint-disable-next-line 
  }, [id]);

  const handleClose = () => {
    appDispatch({ type: ActionType.SET_IS_OPEN, isOpen: false })
  }

  const titleClickHandler = async (file: Attachment, fileVersion: number) => {
    const summaryText = `Summary v${fileVersion}`;
    dispatch({ type: SummaryDetailsActionType.SET_SUMMARY_TEXT, summaryText });

    // setCurrentFile(file)
    const { key } = file || {}
    appDispatch({ type: ActionType.SET_IS_OPEN, isOpen: true })

    if (key) {
      await getSignedUrl({
        variables: {
          getSignedUrl: key
        }
      })
    }
  }

  const { failedReason } = currentJobSummary ?? {} 

  return (
    <>
      <Box pt="20px">
        <CustomAlert
          buttonText='Dismiss'
          alertType='info'
          alertTitle='Disclaimer'
          description={
            <>
              Error & Omissions are expected, please refer to our <Link href="https://4cornersdepo.com/privacy-policy" target="_blank">Privacy Policy</Link> section Artificial Intelligence Disclaimer for further details.
            </>
          }
        />
      </Box>

      {fileStatus === StatusType.Failed &&
        <CustomAlert
          buttonText='Dismiss'
          alertType='error'
          alertTitle='Summary Failed'
          fileStatus={fileStatus}
          description={failedReason || "N/A"}
        />
      }

      <SummaryDetailHeader fileStatus={fileStatus} />

      <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs={8}>
          <Box p="20px 0 20px 20px">
            <Box border="1px solid #E4E7EC" borderRadius="5px" p="20px" sx={{ cursor: "pointer" }}>
              <Box display="flex" alignItems="start" gap="5px" justifyContent='space-between' maxWidth="100%">
                <Box sx={{ display: 'flex', alignItems: 'start' }} flex={1} maxWidth="calc(100% - 85px)">
                  <Box sx={fileIconBox} minWidth="32px">
                    {getFileIcon(inputFileTitle || "")}
                  </Box>

                  <Box flex={1} maxWidth="100%">
                    <Tooltip title={inputFileTitle} placement="top-start" PopperProps={TOOLTIP_POPPER_PROPS}>
                      <Typography noWrap>
                        {inputFileTitle || ""}
                      </Typography>
                    </Tooltip>
                  </Box>
                </Box>

                <Box>
                  <IconButton component='a' href={inputFileUrl} target="_blank" download={inputFileTitle}>
                    <DownloadSummaryIcon />
                  </IconButton>

                  {(fileStatus === StatusType.Completed || fileStatus === StatusType.Failed) &&
                    <IconButton onClick={() => dispatch({ type: SummaryDetailsActionType.SET_IS_EDIT_FILE, isEditFile: true })}>
                      <EditIcon />
                    </IconButton>
                  }
                </Box>
              </Box>
            </Box>

            <SummaryInfoDetails
              summaryLoader={loading}
              state={state}
              dispatch={dispatch}
            />

            <>
              <Box pt="20px">
                <Typography fontSize="26px" fontWeight="700px">
                  Add Prompts
                </Typography>
              </Box>

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <Prompts isEdit={editableFile} />

                  {editableFile && (
                    <Box display="flex" p="20px" gap="5px" justifyContent="flex-end">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          dispatch({ type: SummaryDetailsActionType.SET_EDITABLE_FILE, editableFile: !editableFile })
                        }}
                      >
                        Cancel
                      </Button>
                      <Button variant="contained" type="submit">
                        Save
                      </Button>
                    </Box>
                  )}
                </form>
              </FormProvider>

              <Box mt="20px">
                {!editableFile && (
                  <Button
                    variant="outlined"
                    disabled={fileStatus === StatusType.Active}
                    onClick={() => {
                      dispatch({ type: SummaryDetailsActionType.SET_EDITABLE_FILE, editableFile: !editableFile })
                    }}
                  >
                    Edit Response
                  </Button>
                )}

                {fileStatus === StatusType.Active &&
                  <Tooltip title='Edit response will be enabled once the summary is generated.'>
                    <IconButton color='secondary'>
                      <InfoOutlined />
                    </IconButton>
                  </Tooltip>
                }
              </Box>
            </>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <GeneratedFilesList
            state={state}
            summaryLoader={loading}
            clickFileHandler={titleClickHandler}
            dispatch={dispatch}
          />
        </Grid>
      </Grid>

      <UpdateSummaryFile state={state} dispatch={dispatch} />

      <CustomModal maxWidth='1200px' isOpen={isOpen} handleClose={handleClose}>
        <Box sx={{ height: 'calc(100vh - 150px)' }}>
          <DocumentViewer
            url={signedUrl}
            title={summaryText || ""}
            fileType='doc'
            handleClose={handleClose} />
        </Box>
      </CustomModal>
    </>
  );
};
