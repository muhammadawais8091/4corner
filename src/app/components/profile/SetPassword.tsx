/* eslint-disable @typescript-eslint/ban-ts-comment */
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, CircularProgress, Collapse, IconButton, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { UpdateUserPasswordInput, useUpdateUserPasswordMutation } from '../../../generated';
import { PASSWORD_UPDATED_SUCCESSFULLY } from '../../constants';
import { SetNewPasswordInput } from '../../interfaceTypes';
import palette from '../../theme/palette';
import { generalInformation } from '../../theme/styleConstants';
import { firstLetterUppercase } from '../../utils';
import { setPasswordValidationSchema } from '../../validationSchema';
import { Alert } from '../common/Alert';
import { CustomController } from '../common/CustomController';

export const SetPassword: FC = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  const [setPassword, { loading }] = useUpdateUserPasswordMutation({
    onError({ message }) {
      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted(data) {
      const { updateUserPassword } = data
      if (updateUserPassword) {
        Alert.success(PASSWORD_UPDATED_SUCCESSFULLY)
        setIsEditOpen(false)
      }
    },
  })

  const methods = useForm<SetNewPasswordInput>({
    mode: "all",
    // @ts-expect-error
    resolver: yupResolver(setPasswordValidationSchema),
    defaultValues: {
      newPassword: "",
      repeatPassword: "",
      oldPassword: ""
    }
  });

  useEffect(() => {
    reset({
      newPassword: "",
      repeatPassword: "",
      oldPassword: "",
    })
    // eslint-disable-next-line
  }, [isEditOpen])

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: UpdateUserPasswordInput) => {
    const { newPassword, oldPassword } = data
    await setPassword({
      variables: {
        updateUserPasswordInput: {
          newPassword,
          oldPassword
        }
      }
    })
  }

  return (
    <>
      <Box marginBottom='2rem' borderBottom={`1px solid ${palette.lightBorderColor}`} position='relative'>
        <Box sx={generalInformation}>
          <Typography variant="h6">Change password</Typography>

          <IconButton onClick={() => setIsEditOpen(!isEditOpen)}>
            {isEditOpen ? <ArrowBackIcon color='primary' /> : <EditIcon color='primary' />}
          </IconButton>
        </Box>

        <Collapse in={isEditOpen}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Box maxWidth={500} mb={2}>
                <Box>
                  <CustomController
                    controllerName='oldPassword'
                    controllerLabel='Current Password'
                    fieldType='password'
                    isPassword
                  />
                </Box>

                <Box>
                  <CustomController
                    controllerName='newPassword'
                    controllerLabel='New Password'
                    fieldType='password'
                    isPassword
                  />
                </Box>

                <Box>
                  <CustomController
                    controllerName='repeatPassword'
                    controllerLabel='Repeat Password'
                    fieldType='password'
                    isPassword
                  />
                </Box>

                <Button sx={{ marginTop: '8px' }} fullWidth type="submit" variant="contained" color='primary' disabled={loading} endIcon={loading && <CircularProgress size={20} color="inherit" />}>Update Password</Button>
              </Box>
            </form>
          </FormProvider>
        </Collapse>
      </Box>
    </>
  )
}
