import { yupResolver } from '@hookform/resolvers/yup';
import { InfoOutlined } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, DialogActions, IconButton, Slide, Switch, Tooltip, Typography } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import moment from 'moment-timezone';
import { ReactNode, useState } from 'react';
import { Controller, FormProvider, Resolver, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TemplateType, useCreateJobSummaryMutation } from '../../../generated';
import { Alert as AlertToaster } from '../../components/common/Alert';
import { BackButton } from '../../components/common/BackButton';
import { UploadDocumentFile } from '../../components/common/UploadDocumentFile';
import { CaseInformation } from '../../components/dashboard/CaseInformation';
import { Prompts } from '../../components/dashboard/Prompts';
import { INFORMATION_FIELDS, INFORMATION_FIELDS_CONFIDENTIAL, NEXT, fileUploadingSteps } from '../../constants';
import { AdditionalTemplateInterface, CustomResolverOptionsForUploadFile } from '../../interfaceTypes';
import { uploadFiles } from '../../rest/files';
import palette from '../../theme/palette';
import { stepperStep } from '../../theme/styleConstants';
import { promptsAndCaseSchema } from '../../validationSchema';
import { CustomModal } from '../common/CustomModal';
import { Preview } from './Preview';
import { ProcessingSummary } from './ProcessingSummary';
import { UploadingFileMeasures } from './UploadingFileMeasures';

export const UploadFile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [docGuidelines, setDocGuidelines] = useState(false);
  const [template, setTemplateValue] = useState<TemplateType>()
  const [isSummarySubmitted, setSummarySubmitted] = useState(false);
  const [fileError, setFileError] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { black900, grayTwo } = palette;

  const navigate = useNavigate();

  const methods = useForm<AdditionalTemplateInterface>({
    mode: 'all',
    resetOptions: {
      keepIsSubmitted: true
    },
    resolver: yupResolver(promptsAndCaseSchema) as Resolver<AdditionalTemplateInterface, CustomResolverOptionsForUploadFile>,
    defaultValues: {
      prompts: [{ prompt: '' }]
    }
  });

  const { handleSubmit, trigger, control } = methods;

  const [createJobSummary] = useCreateJobSummaryMutation({
    onError({ message }) {
      AlertToaster.error(message);
    },

    async onCompleted(data) {
      if (data) {
        const {
          createJobSummary: { id }
        } = data;

        const resultStatus = id && (await uploadFiles({ jobSummaryId: id, files, status: 'active' }));

        if (resultStatus) {
          setIsLoading(false);
          setFileError(false)
          setSummarySubmitted(true)
          AlertToaster.success('Summary is in process of generation. You will be notified through email once it is done');
        } else {
          setFileError(true)
          AlertToaster.error('Something went wrong while creating the case summary and uploading documents!')
        }
      }
    }
  });

  const handleClick = async () => {
    const isValid = !isChecked ? await trigger(INFORMATION_FIELDS) : await trigger(INFORMATION_FIELDS_CONFIDENTIAL);

    if (isValid && template !== TemplateType.TemplateC) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (isValid && template === TemplateType.TemplateC) {
      if (activeStep === 0) {
        setActiveStep((prevStep) => prevStep + 2);
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };

  const onSubmit = async (data: AdditionalTemplateInterface) => {
    const { prompts, deponentsFirstName, deponentsLastName, deponentsGender, caseName, caseNumber, volumeNumber, isConfidential, confidentialValue, date, summaryTemplate, deponentsTitle } = data;
    setIsLoading(true);
    const modifiedPrompts = prompts?.map((obj: { prompt: string }, index: number) => {
      const newKey = `prompt${index + 1}`;
      return { [newKey]: obj.prompt };
    });

    const prompt = {};
    const courtDateTimeStamp = moment(date).format('YYYY-MM-DD h:mm A');

    for (let i = 0; i < modifiedPrompts.length; i++) {
      Object.assign(prompt, modifiedPrompts[i]);
    }

    await createJobSummary({
      variables: {
        createJobSummaryInput: {
          deponentsGender,
          caseName,
          caseNumber,
          volumeNumber,
          prompt: !!prompt ? JSON.stringify(prompt) : undefined,
          deponentsFirstName,
          deponentsLastName,
          deponentsTitle,
          isConfidential,
          confidentialValue: confidentialValue ? confidentialValue : undefined,
          depositionDate: courtDateTimeStamp,
          templateTypes: summaryTemplate
        }
      }
    });
  };

  const getNextButtonText = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return NEXT;
      case 1:
        return toggleSwitch ? 'Add Prompt' : NEXT;
      case 2:
        return files.length > 0 ? NEXT : 'Upload File';
      default:
        return 'Generate Summary';
    }
  };

  const handleSwitch = () => {
    setToggleSwitch(!toggleSwitch);
  };

  const handleStepperState = (template?: TemplateType) => {
    if (template === TemplateType.TemplateC && activeStep === 2) {
      setActiveStep(0)
    } else {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <Box maxWidth={900} width="100%" mx="auto">
      {!isSummarySubmitted ?
        <>
          <Box py="25px">{activeStep === 1 && <BackButton handleClick={() => setActiveStep((prevStep) => prevStep - 1)} />}</Box>

          <Box mb="40px">
            <Typography variant="h2" sx={{ color: black900, fontWeight: 500 }}>
              Generate summary
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: '8px', color: grayTwo }}>
              You can create summarized document of your uploaded transcript by using AI prompts features of Chat GPT.
            </Typography>
          </Box>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Stepper sx={stepperStep} activeStep={activeStep}>
                {fileUploadingSteps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: { optional?: ReactNode } = {};

                  return (
                    <Step key={`${label}-${index}`} {...stepProps} sx={{ padding: '0 16px' }}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              <Box pt="50px" pb="20px">
                <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
                  <Box>
                    {activeStep === 0 && (
                      <>
                        <Typography variant="h2" pb="24px">
                          Case information
                        </Typography>

                        <CaseInformation
                          isChecked={isChecked}
                          setIsChecked={setIsChecked}
                          setTemplateValue={setTemplateValue}
                        />
                      </>
                    )}
                  </Box>
                </Slide>

                <Slide direction="left" in={activeStep === 1} mountOnEnter unmountOnExit>
                  <Box>
                    {activeStep === 1 && (
                      <>
                        <Box display="flex" alignItems="center" gap="10px" mb="15px">
                          <Typography variant="h2">Add Prompts</Typography>

                          <Controller
                            control={control}
                            name="promptSwitch"
                            defaultValue={false}
                            render={({ field }) => (
                              <Switch
                                sx={{ marginRight: '1rem' }}
                                color="primary"
                                value={field.value}
                                checked={toggleSwitch}
                                onChange={(_event, value) => {
                                  field.onChange(value);
                                  handleSwitch();
                                }}
                              />
                            )}
                          />
                        </Box>

                        {toggleSwitch && <Prompts isEdit={true} />}
                      </>
                    )}
                  </Box>
                </Slide>

                <Slide direction="left" in={activeStep === 2} mountOnEnter unmountOnExit>
                  <Box>
                    {activeStep === 2 && (
                      <>
                        <Box display="flex" alignItems="center" mb="20px">
                          <Typography variant="h2">
                            Upload new document
                          </Typography>

                          <Tooltip title="Click to view important guidelines before uploading your document." placement='top-start'>
                            <IconButton sx={{ m: '5px' }} onClick={() => setDocGuidelines(true)}>
                              <InfoOutlined color='secondary' />
                            </IconButton>
                          </Tooltip>
                        </Box>

                        <UploadDocumentFile files={files} setFiles={setFiles} />
                      </>
                    )}
                  </Box>
                </Slide>

                <Slide direction="left" in={activeStep === 3} mountOnEnter unmountOnExit>
                  <Box>
                    {activeStep === 3 && (
                      <>
                        <Typography variant="h2" mb="6px">
                          Preview Prompts
                        </Typography>

                        <Preview files={files} />
                      </>
                    )}
                  </Box>
                </Slide>
              </Box>

              <DialogActions sx={{ px: '0' }}>
                <Button onClick={() => navigate('/')}>Cancel</Button>

                <Box flex={1} justifyContent="flex-end" display="flex">
                  <Button onClick={() => handleStepperState(template)} disabled={activeStep === 0 ? true : false}>
                    Back
                  </Button>

                  {activeStep !== fileUploadingSteps.length - 1 && (
                    <Button onClick={handleClick} variant="contained" color="primary"
                      disabled={activeStep === 2 && files.length === 0}>
                      {getNextButtonText(activeStep)}
                    </Button>
                  )}

                  {activeStep === fileUploadingSteps.length - 1 && (
                    <Box>
                      <LoadingButton type="submit" variant="contained" loading={isLoading} disabled={files.length === 0 && fileError}>
                        Generate Summary
                      </LoadingButton>
                    </Box>
                  )}
                </Box>
              </DialogActions>
            </form>
          </FormProvider>
        </> :
        <ProcessingSummary sx={{ pt: '50px' }} />
      }

      <CustomModal
        isOpen={docGuidelines}
        maxWidth="800px"
        title='Guidelines for document'
        handleClose={() => setDocGuidelines(false)}>
        <UploadingFileMeasures />

        <Box display="flex" justifyContent="flex-end">
          <Button onClick={() => setDocGuidelines(false)} color='primary'>Cancel</Button>
        </Box>
      </CustomModal>
    </Box>
  );
};
