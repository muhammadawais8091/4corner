import { FC, useContext } from 'react'
import { Button, CircularProgress, DialogActions, Typography } from '@mui/material'
import { UserRemoveProps } from '../../interfaceTypes';
import { useRemoveUserMutation } from '../../../generated';
import { firstLetterUppercase } from '../../utils';
import { Alert } from '../common/Alert';
import { UserActionType } from '../../context/UserContextReducer';
import { REMOVE_USER_SUCCESSFULLY } from '../../constants';
import { CustomModal } from '../common/CustomModal';
import { AppContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';

export const UserRemove: FC<UserRemoveProps> = ({ currentUserData, dispatch, usersData, removeUser, setRemoveUser, refetch }) => {
  const { dispatch: appDispatch } = useContext(AppContext)
  const { email, id } = currentUserData || {}

  const [deleteUser, { loading }] = useRemoveUserMutation({
    onError({ message }) {
      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted(data) {
      const { removeUser } = data

      if (removeUser) {
        const removeUser = usersData?.filter((user) => user?.id !== id)

        dispatch({ type: UserActionType.SET_USERS_DATA, usersData: removeUser || [] })
        dispatch({ type: UserActionType.SET_USER_ROLES, userRole: "" })
        appDispatch({ type: ActionType.SET_CURRENT_PAGE, currentPage: 1 })

        refetch && refetch();
        setRemoveUser(false);
        return Alert.success(REMOVE_USER_SUCCESSFULLY);
      }
    }
  })

  const handleRemoveClose = async () => {
    setRemoveUser(false);
  };

  const handleRemoveUser = async () => {
    if (id) {
      await deleteUser({
        variables: {
          removeUserId: id
        }
      })
    }
  };

  return (
    <CustomModal
      title='Remove staff'
      handleClose={handleRemoveClose}
      isOpen={removeUser}
      infoIcon
      maxWidth="700px"
    >
      <Typography variant="h4" marginBottom={3} paddingLeft={0.5}>Are you sure you want to delete this user having email: {email}?</Typography>
      <DialogActions sx={{ paddingY: '0' }}>
        <Button color="inherit" onClick={handleRemoveClose}>Close</Button>

        <Button variant="contained" color="error" onClick={handleRemoveUser} disabled={loading}
          endIcon={loading && <CircularProgress size={14} color="inherit" />}
        >
          Remove User
        </Button>
      </DialogActions>
    </CustomModal>
  )
}
