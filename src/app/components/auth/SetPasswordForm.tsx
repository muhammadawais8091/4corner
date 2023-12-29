/* eslint-disable @typescript-eslint/ban-ts-comment */
//packages block
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// component block
import { CustomController } from "../common/CustomController";
// others
import { ResetPasswordInput, useVerifyPasswordTokenAndSetPasswordMutation, useVerifyResetPasswordTokenMutation } from "../../../generated";
import { RESET_PASSWORD_SUCCESS, SAVE } from "../../constants";
import { ResetPasswordProps } from "../../interfaceTypes";
import { firstLetterUppercase } from "../../utils";
import { resetPasswordValidationSchema } from "../../validationSchema";
import { Alert } from "../common/Alert";

export const SetPasswordForm: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token')

  const methods = useForm<ResetPasswordProps>({
    mode: "all",
    // @ts-expect-error
    resolver: yupResolver(resetPasswordValidationSchema),
    defaultValues: {
      password: "",
      repeatPassword: ""
    }
  });

  const { handleSubmit } = methods;

  const [verifyToken, { loading: vLoading }] = useVerifyResetPasswordTokenMutation({
    onError({ message }) {
      Alert.error(firstLetterUppercase(message || ''))
      navigate('/login')
    }
  })

  const [resetPassword, { loading }] = useVerifyPasswordTokenAndSetPasswordMutation({
    onError({ message }) {
      return Alert.error(firstLetterUppercase(message || ''))
    },

    onCompleted(data) {
      if (data.verifyPasswordTokenAndSetPassword) {
        Alert.success(RESET_PASSWORD_SUCCESS)
        navigate('/login')
      }
    }
  })

  const onSubmit = async (data: ResetPasswordInput) => {
    if(token) {
      await resetPassword({
        variables: {
          resetPasswordInput: {
            password: data.password,
            token
          }
        }
      })
    }
  }

  useEffect(() => {    
    if(token) {
      verifyToken({
        variables: {
          token
        }
      })
    }
  }, [token, verifyToken])

  if (vLoading) {
    return <Box marginBottom='20px' marginTop='1rem' ><CircularProgress /></Box>
  }

  return (
    <Box marginTop='1rem' width='100%'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Box>
            <CustomController
              controllerName='password'
              controllerLabel='Password'
              fieldType='password'
              isPassword
            />
          </Box>

          <Box>
            <CustomController
              controllerName='repeatPassword'
              controllerLabel='Re enter your password'
              fieldType='password'
              isPassword
            />
          </Box>

          <Box marginBottom='20px' marginTop='1rem' >
            <Typography component={Link} to='/login' color="primary" variant="h4">
              Back to Login
            </Typography>
          </Box>

          <Button variant="contained" type="submit" fullWidth color="primary" disabled={loading}
            endIcon={loading && <CircularProgress size={20} color="inherit" />}>
            {SAVE}
          </Button>
        </form>
      </FormProvider>
    </Box>
  )
}