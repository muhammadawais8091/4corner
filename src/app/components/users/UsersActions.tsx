import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { AppContext, AuthContext } from '../../context';
import { UserAction, UserActionType, UserState } from '../../context/UserContextReducer';
import { DispatchAndState } from '../../interfaceTypes';
import { customTheme } from '../../theme';
import { UserRightActions } from '../../theme/styleComponents';
import { CustomButton } from '../common/CustomButton';
import { Search } from '../common/Search';
import { UsersInvitationSuccessModal } from './UserInviteSuccessModal';
import { UsersInvitationModal } from './UsersInviteModal';
import { ActionType } from '../../context/AppContextReducer';
import { UserRoles } from '../../../generated';

export const UsersActions: FC<DispatchAndState<UserState, UserAction>> = ({ btnActionText, dispatch: userDispatch, state, loading }) => {
  const { dispatch } = useContext(AppContext);
  const { userRole } = state || {};
  const { isAdmin } = useContext(AuthContext);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | undefined>(undefined)

  const handleRoleChange = (event: SelectChangeEvent) => {
    const { target: { value } } = event
    userDispatch({ type: UserActionType.SET_USER_ROLES, userRole: value as UserRoles | string })
    dispatch({ type: ActionType.SET_CURRENT_PAGE, currentPage: 1 })
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    userDispatch({ type: UserActionType.SET_KEYWORD, keyword: event.target.value })
    dispatch({ type: ActionType.SET_CURRENT_PAGE, currentPage: 1 })
  };

  const handleClickOpen = () => {
    dispatch({ type: ActionType.SET_IS_OPEN, isOpen: true })
  };

  return (
    <Box display='flex' justifyContent='space-between' sx={{ [customTheme.breakpoints.down('sm')]: { flexDirection: 'column' } }}>
      <Box>
        <Search handleChange={handleSearchChange} />
      </Box>

      <UserRightActions>
        <FormControl>
          <InputLabel id="roleLabel" shrink>Role</InputLabel>

          <Select
            labelId="roleLabel"
            id="selectRole"
            notched
            defaultValue={''}
            value={userRole || ""}
            displayEmpty={true}
            disabled={loading}
            sx={{ width: 130 }}
            size="small"
            label="Role"
            onChange={handleRoleChange}
          >
            <MenuItem value="">All</MenuItem>
            {isAdmin && <MenuItem value={UserRoles.Admin}>Admin</MenuItem>}
            <MenuItem value={UserRoles.Paralegal}>Paralegal</MenuItem>
            <MenuItem value={UserRoles.Attorney}>Attorney</MenuItem>
            <MenuItem value={UserRoles.Client}>Clients</MenuItem>
          </Select>
        </FormControl>

        <CustomButton sx={{ padding: '8px 20px' }} onClick={handleClickOpen}>
          {btnActionText}
        </CustomButton>
      </UserRightActions>

      <UsersInvitationModal setEmail={setCurrentUserEmail} />

      <UsersInvitationSuccessModal email={currentUserEmail} />
    </Box>
  )
}
