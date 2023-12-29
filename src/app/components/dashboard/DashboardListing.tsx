import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, IconButton, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import moment from 'moment';
import { Reducer, useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '../../../assets/svgs';
import { JobSummary, useJobSummariesLazyQuery } from '../../../generated';
import { DASHBOARD_TABLE_COLUMNS, GRAPHQL_QUERY_POLICY, NOT_FOUND_EXCEPTION } from '../../constants';
import { AppContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import {
  JobSummaryAction, JobSummaryActionType, JobSummaryState, jobSummaryInitialState, jobSummaryReducer,
} from '../../context/JobSummaryReducer';
import palette from '../../theme/palette';
import { dashboardStickyColumn, fileIconBox } from '../../theme/styleConstants';
import { formatEnumMember, formatFileSize, getFullName } from '../../utils';
import { Alert } from '../common/Alert';
import { CustomEntity } from '../common/CustomEntity';
import { CustomPagination } from '../common/CustomPagination';
import { getFileIcon } from '../common/FileIcon';
import { NoDataFound } from '../common/NoDataFound';
import { StickyTable } from '../common/StickyTable';
import { DashboardSkeleton } from '../skeletons/DashboardSkeleton';
import { DashboardActions } from './DashboardActions';
import { DeleteDocumentModal } from './DeleteDocumentModal';
import { getSummaryStatus } from '../common/SummaryStatus';

export const DashboardListing = () => {
  const { pageLimit, currentPage, dispatch } = useContext(AppContext);
  const [jobSummaryToDelete, setJobSummaryToDelete] = useState<JobSummary>();
  const [jobSummaryState, jobSummaryDispatch] = useReducer<Reducer<JobSummaryState, JobSummaryAction>>(
    jobSummaryReducer,
    jobSummaryInitialState
  );
  const { keyword, jobSummaryData, totalCount } = jobSummaryState;
  const navigate = useNavigate();

  const [getJobSummaries, { loading, refetch }] = useJobSummariesLazyQuery({
    ...GRAPHQL_QUERY_POLICY,
    variables: undefined,

    onError({ message }) {
      jobSummaryDispatch({ type: JobSummaryActionType.SET_JOB_SUMMARY_DATA, jobSummaryData: [] });
      jobSummaryDispatch({ type: JobSummaryActionType.SET_TOTAL_COUNT, totalCount: 0 });
      dispatch({ type: ActionType.SET_TOTAL_PAGE_COUNT, totalPageCount: 0 });
      if (message === NOT_FOUND_EXCEPTION) return;
      Alert.error(message);
    },

    onCompleted(data) {
      const { jobSummaries } = data;

      if (jobSummaries) {
        const { jobSummaries: summaryData, pagination } = jobSummaries;

        if (summaryData) {
          jobSummaryDispatch({ type: JobSummaryActionType.SET_JOB_SUMMARY_DATA, jobSummaryData: summaryData });
        }

        if (pagination) {
          const { totalPages, totalCount } = pagination;
          jobSummaryDispatch({ type: JobSummaryActionType.SET_TOTAL_COUNT, totalCount: totalCount || 0 });
          dispatch({ type: ActionType.SET_TOTAL_PAGE_COUNT, totalPageCount: totalPages || 0 });
        }
      }
    },
  });

  const handleRemoveFile = (jobSummary: JobSummary) => {
    setJobSummaryToDelete(jobSummary);
    dispatch({ type: ActionType.SET_IS_DELETE_OPEN, isDeleteOpen: true });
  };

  useEffect(() => {
    getJobSummaries({
      variables: {
        fetchJobSummariesInput: {
          keyword: keyword && keyword.length > 2 ? keyword : '',

          paginationOptions: {
            page: currentPage,
            limit: pageLimit,
          },
        },
      },
    });

    // eslint-disable-next-line
  }, [keyword, currentPage]);

  const isEmpty = jobSummaryData?.length === 0 && !loading;

  return (
    <>
      <CustomEntity customEntityText="Summary list" customEntityCount={totalCount as number} />

      <Box pt="24px">
        <DashboardActions dispatch={jobSummaryDispatch} refetch={refetch} state={jobSummaryState} />
      </Box>

      <Box pt="30px">
        <StickyTable pagination={!!totalCount && <CustomPagination loading={loading} />}>
          <TableHead>
            <TableRow>
              {
                DASHBOARD_TABLE_COLUMNS.map((columnName) => (
                  <TableCell key={columnName}
                    sx={columnName === 'Actions' ? { ...dashboardStickyColumn, zIndex: 10 } : undefined}
                  >
                    {columnName}
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>

          {loading ? (
            <DashboardSkeleton noOfRows={5} />
          ) :
            !isEmpty ? (
              <TableBody>
                {jobSummaryData?.map((jobSummary) => {
                  const { caseName, id, files, deponentsFirstName, deponentsLastName, deponentsTitle, caseNumber, templateTypes, volumeNumber, depositionDate, status, createdAt, users } = (jobSummary) ?? {};
                  const filteredFile = files?.filter((file) => file.metaType === 'INPUT_FILE');
                  const { title, fileSize, typeId } = filteredFile?.[0] || {};
                  const startTimeStamp = moment.tz(moment.unix(parseInt(depositionDate || "") / 1000), 'UTC').format('YYYY/MM/DD')
                  const createdAtDate = moment(createdAt).format('YYYY/MM/DD')
                  const createdAtTime = moment(createdAt).format('HH:MM A')
                  const { fullName, email } = users?.[0] ?? {}

                  return (
                    <TableRow key={id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={fileIconBox} minWidth={40}>
                            {getFileIcon(title || "")}
                          </Box>

                          <Box sx={{ flex: 1 }}>
                            <Tooltip placement='top-start' title={title}>
                              <Typography variant="body1" color="inherit" noWrap maxWidth="200px">
                                {title || "N/A"}
                              </Typography>
                            </Tooltip>

                            <Typography variant="body2" color="inherit" noWrap>
                              {!!fileSize ? formatFileSize(fileSize) : '--'}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell width="auto">
                        <Box minWidth={120}>
                          <Typography variant="body2" color="inherit">
                            {startTimeStamp}
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box minWidth={130} maxWidth={150}>
                          <Tooltip placement='top-start' title={getFullName(deponentsFirstName || "", deponentsLastName || "")}>
                            <Typography variant="body2" noWrap color="inherit">
                              {getFullName(deponentsFirstName || "", deponentsLastName || "")}
                            </Typography>
                          </Tooltip>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box minWidth={130} maxWidth={150}>
                          <Tooltip placement='top-start' title={deponentsTitle}>
                            <Typography variant="body2" noWrap color="inherit">
                              {deponentsTitle || "N/A"}
                            </Typography>
                          </Tooltip>
                        </Box>
                      </TableCell>

                      <TableCell width="auto">
                        <Box maxWidth={150}>
                          <Tooltip placement='top-start' title={caseName}>
                            <Typography noWrap variant="body2" color="inherit">
                              {caseName}
                            </Typography>
                          </Tooltip>
                        </Box>

                        <Typography variant="h3" sx={{ fontWeight: '500', color: palette.blackTwo }}>
                          Case #: {caseNumber}
                        </Typography>
                      </TableCell>

                      <TableCell width="auto">
                        <Box minWidth={70}>
                          <Typography variant="body2" color="inherit">
                            {volumeNumber}
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box minWidth={130}>
                          {getSummaryStatus(status)}
                        </Box>
                      </TableCell>

                      <TableCell width="auto">
                        <Box maxWidth={130}>
                          <Tooltip title={fullName} placement='top-start'>
                            <Typography noWrap variant="body2" color="inherit">
                              {fullName}
                            </Typography>
                          </Tooltip>


                          <Tooltip placement='bottom-start' title={email}>
                            <Typography variant="body1" color="inherit" noWrap>
                              {email || "N/A"}
                            </Typography>
                          </Tooltip>
                        </Box>
                      </TableCell>

                      <TableCell width="auto">
                        <Typography noWrap maxWidth="150px" variant="body2" color="inherit">
                          {formatEnumMember(templateTypes || "")}
                        </Typography>
                      </TableCell>

                      <TableCell width="auto">
                        <Typography noWrap maxWidth="150px" variant="body2" color="inherit">
                          {createdAtDate}
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: '500', color: palette.blackTwo }}>
                          {createdAtTime}
                        </Typography>
                      </TableCell>


                      <TableCell sx={{ ...dashboardStickyColumn, zIndex: 8, backgroundColor: 'white' }}>
                        <Box minWidth={100}>
                          <IconButton size="large" onClick={() => handleRemoveFile(jobSummary as JobSummary)}>
                            <TrashIcon />
                          </IconButton>

                          <IconButton onClick={() => navigate(`/view-document/${typeId}`)}>
                            <VisibilityIcon sx={{ color: '#3498DB' }} />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={10}>
                    <NoDataFound description="No Files Found" height="calc(100vh - 496px)" />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
        </StickyTable>
      </Box>

      <DeleteDocumentModal jobSummary={jobSummaryToDelete} refetch={refetch} />
    </>
  );
};