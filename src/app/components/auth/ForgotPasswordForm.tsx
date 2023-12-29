/* eslint-disable @typescript-eslint/ban-ts-comment */
//packages block
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// component block
import { CustomController } from "../common/CustomController";
// others
import { ForgotPasswordInput, useForgotPasswordMutation } from "../../../generated";
import { AUTH_LINKS, FORGET_PASSWORD_SUCCESS, NOT_FOUND_EMAIL_MESSAGE, NOT_FOUND_EXCEPTION } from "../../constants";
import { firstLetterUppercase } from "../../utils";
import { forgotPasswordValidationSchema } from "../../validationSchema";
import { Alert } from "../common/Alert";

export const ForgotPasswordForm: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const methods = useForm<ForgotPasswordInput>({
    mode: "all",
    // @ts-expect-error
    resolver: yupResolver(forgotPasswordValidationSchema),
    defaultValues: {
      email: ''
    }
  });

  const { handleSubmit } = methods;

  const [forgotPassword, { loading }] = useForgotPasswordMutation({
    onError({ message }) {
      if (message.toLowerCase() === NOT_FOUND_EXCEPTION) {
        return Alert.error(NOT_FOUND_EMAIL_MESSAGE)
      }

      return Alert.error(firstLetterUppercase(message || ''))
    },

    onCompleted(data) {
      if (data.forgotPassword) {
        Alert.success(FORGET_PASSWORD_SUCCESS)
        
        navigate('/check-email')
      }
    }
  })

  const onSubmit = async (data: ForgotPasswordInput) => {
    await forgotPassword({
      variables: {
        forgotPasswordInput: data
      }
    })
  }

  return (
    <Box marginTop='40px' width='100%'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <CustomController
            controllerName='email'
            controllerLabel='Email'
            fieldType='email'
          />

          <Box pt='40px' pb='20px'>
            <Button sx={{ fontWeight: '700' }} variant="contained" type="submit" fullWidth color="primary" disabled={loading}
              endIcon={loading && <CircularProgress size={20} color="inherit" />}>
              Reset Password
            </Button>
          </Box>

          <Box textAlign='center'>
            <Typography sx={{ fontWeight: '700' }} component={Link} to={AUTH_LINKS.LOGIN_LINK} color="primary" variant="h4">
              Back
            </Typography>
          </Box>
        </form>
      </FormProvider>
    </Box>
  )
}