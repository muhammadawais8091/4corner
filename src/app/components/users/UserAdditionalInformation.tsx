import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC, useContext } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { UpdateUserRoleFromAdminMutationVariables, UserRoles, useUpdateUserRoleFromAdminMutation } from '../../../generated'
import { ROLES_UPDATED_SUCCESSFULLY } from '../../constants'
import { AuthContext } from '../../context'
import { UserActionType } from '../../context/UserContextReducer'
import { UserAdditionalInformationInterface } from '../../interfaceTypes'
import { firstLetterUppercase } from '../../utils'
import { Alert } from '../common/Alert'

export const UserAdditionalInformation: FC<UserAdditionalInformationInterface> = ({ usersData, dispatch, setIsAdditionalEditOpen, currentUserData }) => {
  const { isAdmin } = useContext(AuthContext);
  const { id, roles } = currentUserData || {}

  const methods = useForm<UpdateUserRoleFromAdminMutationVariables>({
    defaultValues: {
      role: roles && roles[0]?.role || "",
    }
  })

  const { handleSubmit, control } = methods

  const [updateUser, { loading: userLoading }] = useUpdateUserRoleFromAdminMutation({
    onError({ message }) {
      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted(data) {
      const { updateUserRoleFromAdmin } = data

      if (updateUserRoleFromAdmin) {
        const updatedUsers = usersData?.map((user) => {
          if (user?.id === updateUserRoleFromAdmin.id) {
            return updateUserRoleFromAdmin
          }

          return user
        })

        dispatch({ type: UserActionType.SET_USERS_DATA, usersData: updatedUsers || [] })
        setIsAdditionalEditOpen && setIsAdditionalEditOpen(false)
        return Alert.success(ROLES_UPDATED_SUCCESSFULLY);
      }
    }
  })

  const onSubmit = async (data: UpdateUserRoleFromAdminMutationVariables) => {
    const { role } = data

    if (id) {
      await updateUser({
        variables: {
          userId: id,
          role: (role).toLocaleLowerCase(),
        }
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}
        autoComplete="off">
        <FormControl sx={{ marginTop: '.5rem' }} fullWidth>
          <InputLabel id="snappingPositionTitle">Role</InputLabel>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                label="Role"
                {...field}
              >
                {isAdmin && <MenuItem value={UserRoles.Admin}>Admin</MenuItem>}
                <MenuItem value={UserRoles.Attorney}>Attorney</MenuItem>
                <MenuItem value={UserRoles.Paralegal}>Paralegal</MenuItem>
                <MenuItem value={UserRoles.Client}>Client</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <Box sx={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button size='small' variant='contained' color="primary" aria-label="add" type='submit'
            endIcon={userLoading && <CircularProgress size={20} color="inherit" />}
            disabled={userLoading}
          >
            Update
          </Button>
        </Box>
      </form>
    </FormProvider>
  )
}

