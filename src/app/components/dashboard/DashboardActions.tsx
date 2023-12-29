import { Box } from '@mui/material';
import { ChangeEvent, FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GENERATE_SUMMARY } from '../../constants';
import { JobSummaryAction, JobSummaryActionType, JobSummaryState } from '../../context/JobSummaryReducer';
import { DispatchAndState } from '../../interfaceTypes';
import { customTheme } from '../../theme';
import { UserRightActions } from '../../theme/styleComponents';
import { CustomButton } from '../common/CustomButton';
import { Search } from '../common/Search';
import { UsersInvitationSuccessModal } from '../users/UserInviteSuccessModal';
import { UsersInvitationModal } from '../users/UsersInviteModal';
import { AppContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';

export const DashboardActions: FC<DispatchAndState<JobSummaryState, JobSummaryAction>> = ({ dispatch: jobSummaryDispatch }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    jobSummaryDispatch({ type: JobSummaryActionType.SET_KEYWORD, keyword: event.target.value });
    dispatch({ type: ActionType.SET_CURRENT_PAGE, currentPage: 1 })
  };

  return (
    <Box display="flex" justifyContent="space-between" sx={{ [customTheme.breakpoints.down('sm')]: { flexDirection: 'column' } }}>
      <Box>
        <Search handleChange={handleSearchChange} />
      </Box>

      <UserRightActions>
        <CustomButton sx={{ padding: '8px 20px' }} onClick={() => navigate('/upload-document')}>
          {GENERATE_SUMMARY}
        </CustomButton>
      </UserRightActions>

      <UsersInvitationModal />

      <UsersInvitationSuccessModal />
    </Box>
  );
};
