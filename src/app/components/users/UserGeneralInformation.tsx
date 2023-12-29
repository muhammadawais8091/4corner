import { Box, Button, CircularProgress } from '@mui/material'
import { FC, useEffect } from 'react'
import { FormProvider, Resolver, useForm } from 'react-hook-form'
import { UpdateUserInput, useUpdateUserMutation } from '../../../generated'
import { USER_UPDATED_SUCCESSFULLY } from '../../constants'
import { UserActionType } from '../../context/UserContextReducer'

import { UserGeneralInformationInterface } from '../../interfaceTypes'
import { Alert } from '../common/Alert'
import { CustomController } from '../common/CustomController'
import { yupResolver } from '@hookform/resolvers/yup'
import { updateFullNameSchema } from '../../validationSchema'

export const UserGeneralInformation: FC<UserGeneralInformationInterface> = ({ isEditOpen, setIsEditOpen, currentUserData, usersData, dispatch }) => {
  const { fullName = undefined, email = undefined, id: userId } = currentUserData || {}

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

  const { handleSubmit, setValue, reset } = methods

  const [updateUserProfile, { loading }] = useUpdateUserMutation({
    onError({ message }) {
      Alert.error(message)
    },

    onCompleted(data) {
      const { updateUser } = data

      if (updateUser) {
        const updatedUsers = usersData?.map((user) => {
          if (user?.id === updateUser.id) {
            return updateUser
          }
          return user
        })

        if (updatedUsers && updatedUsers?.length > 0) {
          dispatch({ type: UserActionType.SET_USERS_DATA, usersData: updatedUsers })
          setIsEditOpen && setIsEditOpen(false)
          return Alert.success(USER_UPDATED_SUCCESSFULLY);
        }
      }
    }
  })


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

  useEffect(() => {
    fullName && setValue("fullName", fullName)
  }, [fullName, email, setValue])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitUser)} autoComplete="off">
        <Box mb={2}>
          <CustomController
            controllerName='fullName'
            controllerLabel='Full Name'
            fieldType='text'
          />

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


