/* eslint-disable @typescript-eslint/ban-ts-comment */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, DialogActions, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, useContext } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { UserRoles, useInviteUserMutation } from '../../../generated';
import { CANCEL, CONFLICT, EMAIL_ALREADY_IN_USE, INVITED_USER_DESCRIPTION, INVITED_USER_HEADING, INVITED_USER_SUCCESSFULLY, SEND_INVITES } from '../../constants';
import { AppContext, AuthContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import { InviteTest, UsersInvitationModelProps } from '../../interfaceTypes';
import { firstLetterUppercase, formatEnumMember } from '../../utils';
import { inviteNewStaffSchema } from '../../validationSchema';
import { Alert } from '../common/Alert';
import { CustomController } from '../common/CustomController';
import { CustomModal } from '../common/CustomModal';
import { AuthActionType } from '../../context/AuthContextReducer';

export const UsersInvitationModal: FC<UsersInvitationModelProps> = ({ setEmail }) => {
  const { dispatch: authDispatch } = useContext(AuthContext);
  const { isOpen, dispatch } = useContext(AppContext);
  const { isAdmin } = useContext(AuthContext);

  const methods = useForm<InviteTest>({
    mode: 'all',
    // @ts-expect-error
    resolver: yupResolver(inviteNewStaffSchema(isAdmin)),

    defaultValues: {
      email: "",
      roleType: undefined,
    }
  })

  const { control } = methods;

  const handleClose = () => {
    dispatch({ type: ActionType.SET_IS_OPEN, isOpen: false })
    reset();
  };

  const { handleSubmit, reset } = methods;

  const [inviteUser, { loading }] = useInviteUserMutation({
    onError({ message }) {
      if (message.toLowerCase() === CONFLICT) {
        return Alert.error(EMAIL_ALREADY_IN_USE);
      }

      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted({ inviteUser }) {
      authDispatch({ type: AuthActionType.SET_IS_LOGGED_IN, isLoggedIn: true })
      dispatch({ type: ActionType.SET_IS_INVITE_SUCCESS, isInviteSuccess: true })

      reset();
      dispatch({ type: ActionType.SET_IS_OPEN, isOpen: false })
      if (inviteUser) {
        return Alert.success(INVITED_USER_SUCCESSFULLY);
      }
    }
  })

  const onSubmit = async (data: InviteTest) => {
    const { email, roleType } = data
    setEmail && setEmail(email)

    await inviteUser({
      variables: {
        inviteUserInput: {
          email,
          roleType
        }
      }
    })
  }

  const menuItems = Object.values(UserRoles)
    .filter(role => role !== UserRoles.SuperAdmin)
    .map(role => (
      <MenuItem value={role}>{formatEnumMember(role)}</MenuItem>
    ));

  return (
    <CustomModal maxWidth='500px' isOpen={isOpen} handleClose={handleClose}
      title={INVITED_USER_HEADING}
      subTitle={INVITED_USER_DESCRIPTION}
    >
      <Box marginTop='1rem'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Box>
              <CustomController
                controllerName='email'
                controllerLabel='Email'
                fieldType='email'
              />
            </Box>

            <Box>
              {isAdmin && <FormControl sx={{ marginTop: '.5rem' }} fullWidth>
                <InputLabel id="userRolesLabel">Role</InputLabel>
                <Controller
                  name="roleType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="userRolesLabel"
                      id="userRoles"
                      {...field}
                      fullWidth
                      label="Role"
                    >
                      {menuItems}
                    </Select>
                  )}
                />
              </FormControl>}

              <DialogActions sx={{ paddingX: '0px', paddingTop: '2rem', paddingBottom: '1rem' }}>
                <Button fullWidth sx={{ py: '12px', borderRadius: '7px' }} variant="outlined" color={'secondary'}
                  type='submit' onClick={handleClose}
                >
                  {CANCEL}
                </Button>

                <Button fullWidth sx={{ py: '12px', borderRadius: '7px' }} variant="contained" color="primary"
                  type='submit' disabled={loading} endIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                  {SEND_INVITES}
                </Button>
              </DialogActions>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </CustomModal>
  )
}
