import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {
  Box, Button, Chip, CircularProgress, Collapse, DialogActions,
  IconButton,
  Switch, Typography
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC, useContext, useState } from 'react';
import { UserStatus, useUpdateUserStatusFromAdminMutation } from '../../../generated';
import { STATUS_UPDATED_SUCCESSFULLY } from '../../constants';
import { AuthContext } from '../../context';
import { UserActionType } from '../../context/UserContextReducer';
import { UserUpdateProps } from '../../interfaceTypes';
import palette from '../../theme/palette';
import { generalInformation } from '../../theme/styleConstants';
import { firstLetterUppercase } from '../../utils';
import { Alert } from '../common/Alert';
import { CustomModal } from '../common/CustomModal';
import { UserGeneralInformation } from './UserGeneralInformation';
import { UserAdditionalInformation } from './UserAdditionalInformation';

export const UserUpdate: FC<UserUpdateProps> = ({ currentUserData, usersData, editUser, setEditUser, dispatch }) => {
  const { fullName, email, status, id, roles } = currentUserData || {}
  const { isAdmin } = useContext(AuthContext);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isAdditionalEditOpen, setIsAdditionalEditOpen] = useState<boolean>(false);
  const handleSetNameDialog = () => { setIsEditOpen(!isEditOpen) }
  const additionalSettings = () => { setIsAdditionalEditOpen(!isAdditionalEditOpen) };
  const [userStatus, setUserStatus] = useState<boolean>(status === UserStatus.Active);

  const [updateUserStatus, { loading: statusLoading }] = useUpdateUserStatusFromAdminMutation({
    onError({ message }) {
      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted(data) {
      if (data) {
        const { updateUserStatusFromAdmin } = data

        const updatedUser = usersData?.map((user) => {
          if (user?.id === updateUserStatusFromAdmin.id) {
            return updateUserStatusFromAdmin
          }

          return user
        })
        dispatch({ type: UserActionType.SET_USERS_DATA, usersData: updatedUser || [] })
        return Alert.success(STATUS_UPDATED_SUCCESSFULLY);
      }
    }
  })

  const updateStatus = async () => {
    if (id) {
      await updateUserStatus({
        variables: {
          userId: id,
          status: +userStatus
        }
      })
    }
  }

  const handleStatus = async () => {
    setUserStatus(!userStatus)
  };

  const handleEditUserClose = () => {
    setEditUser(false)
  };

  const userRoles = roles?.map(userRole => {
    const role = userRole?.role.split("_").join(" ")
    return firstLetterUppercase(role || '')
  })

  return (
    <CustomModal
      title='Update staff'
      subTitle='Please update status and role of user if required.'
      isOpen={editUser}
      handleClose={handleEditUserClose}
      maxWidth="600px"
    >
      <Box>
        <Box sx={generalInformation}>
          <Typography variant="h6">Profile settings</Typography>

          {isAdmin &&
            <IconButton onClick={handleSetNameDialog}>
              {isEditOpen ? <ArrowBackIcon color='primary' /> : <EditIcon color='primary' />}
            </IconButton>
          }
        </Box>

        <Collapse in={!isEditOpen}>
          <Box>
            <Typography variant='body2'>Name</Typography>
            <Typography sx={{ marginTop: '10px', marginBottom: '20px' }} variant='h4'>{fullName}</Typography>
          </Box>
        </Collapse>

        <Collapse in={isEditOpen}>
          <UserGeneralInformation
            isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen}
            usersData={usersData} currentUserData={currentUserData} dispatch={dispatch}
          />
        </Collapse>
      </Box>
      
      <Box>
        <Typography variant='body2'>Email</Typography>
        <Typography sx={{ marginTop: '10px', marginBottom: '20px' }} variant='h4'>{email}</Typography>
      </Box>

      <Box>
        <Box sx={generalInformation}>
          <Typography variant="h6">Additional settings</Typography>

          <IconButton onClick={additionalSettings}>
            {isAdditionalEditOpen ? <ArrowBackIcon color='primary' /> : <EditIcon color='primary' />}
          </IconButton>
        </Box>

        <Collapse in={!isAdditionalEditOpen}>
          <Box>
            <Typography variant='body2'>Role</Typography>
            <Box sx={{ marginTop: '10px', marginBottom: '20px', display: 'flex', gap: '10px' }}>
              {userRoles?.map((role) =>
                <Chip key={role} sx={{ fontWeight: '600', border: `1px solid ${palette.primary.main}` }} label={role} variant="outlined" color="default" />
              )}
            </Box>
          </Box>
        </Collapse>

        <Collapse in={isAdditionalEditOpen}>
          <UserAdditionalInformation usersData={usersData} isAdditionalEditOpen={isAdditionalEditOpen}
            dispatch={dispatch} setIsAdditionalEditOpen={setIsAdditionalEditOpen} currentUserData={currentUserData} />
        </Collapse>
      </Box>

      <Box>
        <Typography variant='body2'>Status</Typography>

        <Box sx={{ marginTop: '10px', marginBottom: '20px' }}>
          <Stack direction="row" alignItems='center' justifyContent="space-between" spacing={2}>
            <Box>
              <Switch
                onChange={handleStatus}
                value={userStatus}
                sx={{ marginRight: '1rem' }}
                color="primary"
                defaultChecked={status === 'ACTIVE' && userStatus}
              />
              <Chip sx={{ fontWeight: '600', border: `1px solid ${palette.primary.main}` }} label={userStatus ? "ACTIVE" : "DEACTIVATED"} variant="outlined" color="default" />
            </Box>

            <Button variant='text' size='small' color="primary" aria-label="add" onClick={updateStatus}>
              {statusLoading ? <CircularProgress size={14} color="inherit" /> : <SaveIcon />}
            </Button>
          </Stack>
        </Box>
      </Box>

      <DialogActions sx={{ padding: '30px 0 0 0' }}>
        <Button variant="outlined" color="primary" onClick={handleEditUserClose}>Close</Button>
      </DialogActions>
    </CustomModal>
  )
}
