import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, CircularProgress, Grid } from '@mui/material'
import { FC, useContext, useEffect } from 'react'
import { FormProvider, Resolver, useForm } from 'react-hook-form'
import { UpdateUserInput, UserStatus, useUpdateUserMutation } from '../../../generated'
import { AuthContext } from '../../context'
import { UpdateProfileDialogueInterface } from '../../interfaceTypes'
import { updateFullNameSchema } from '../../validationSchema'
import { CustomController } from '../common/CustomController'
import { Alert } from '../common/Alert'
import { AuthActionType } from '../../context/AuthContextReducer'

export const UpdateProfileDialogue: FC<UpdateProfileDialogueInterface> = ({ isEditOpen, setIsEditOpen }) => {
  const { currentUser, dispatch } = useContext(AuthContext)
  const { id: userId, fullName = undefined, email, status, emailVerified, createdAt, updatedAt, roles } = currentUser || {}

  const methods = useForm<UpdateUserInput>({
    mode: "all",

    resolver: yupResolver(updateFullNameSchema) as Resolver<UpdateUserInput, UpdateUserInput>,
    defaultValues: {
      fullName: fullName || "",
    }
  });

  useEffect(() => {
    reset({ fullName })
    // eslint-disable-next-line
  }, [isEditOpen])

  const [updateUserProfile, { loading }] = useUpdateUserMutation({
    onError({ message }) {
      Alert.error(message)
    },

    onCompleted(data) {
      const { updateUser } = data
      const { fullName } = updateUser

      const updatedUser = {
        ...currentUser,
        id: userId || "",
        email: email || "",
        fullName: fullName || "",
        emailVerified: emailVerified || false,
        createdAt: createdAt!,
        updatedAt: updatedAt!,
        status: status || UserStatus.Active,
        roles: roles
      }

      if (updateUser) {
        dispatch({ type: AuthActionType.SET_CURRENT_USER, currentUser: updatedUser })
        setIsEditOpen && setIsEditOpen(false)
        Alert.success('Profile Updated Successfully')
      }
    }
  })

  const { handleSubmit, reset } = methods

  const onSubmitUser = async (data: UpdateUserInput) => {
    const { fullName } = data

    if (userId) {
      await updateUserProfile({
        variables: {
          userId,
          updateUserInput: {
            fullName,
          }
        }
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitUser)} autoComplete="off">
        <Box mb={2}>
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item sm={6} xs={12}>
              <CustomController
                controllerName='fullName'
                controllerLabel='Full Name'
                fieldType='text'
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" disabled={loading} color='primary' endIcon={loading && <CircularProgress size={15} color="inherit" />}>
              Update
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  )
}


