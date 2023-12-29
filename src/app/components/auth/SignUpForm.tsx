/* eslint-disable @typescript-eslint/ban-ts-comment */
//packages block
import { yupResolver } from "@hookform/resolvers/yup";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
// import ErrorIcon from '@mui/icons-material/Error';
import { Box, Button, CircularProgress, Grow, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// component block
import { CustomController } from "../common/CustomController";
// others
import { useEffect, useState } from "react";
import { RegisterUserInput, useUserRegistrationWithInvitationMutation, useVerifyInvitationEmailTokenMutation } from "../../../generated";
import { BAD_REQUEST, BAD_USER_INPUT, EMAIL_VERIFIED, ENTER_LOGIN_DETAILS, LOGIN_ROUTE, SIGN_UP, USER_REGISTERED_SUCCESSFULLY, VERIFY_TOKEN_TEXT } from "../../constants";
import { SignupInterface } from "../../interfaceTypes";
import palette from "../../theme/palette";
import { flexCenter, lockedFieldIcon } from "../../theme/styleConstants";
import { firstLetterUppercase } from "../../utils";
import { registerUserValidationSchema } from "../../validationSchema";
import { Alert } from "../common/Alert";
import { AuthLayout } from "./Layout";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const SignUpForm = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const userToken = searchParams.get("token")
  const [tokenValid, setTokenValid] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(true);

  const [userValue, setUserValue] = useState<{ email: string }>({ email: '' })
  const navigate = useNavigate();


  const [verifyUser, { loading: verifyUserLoading }] = useVerifyInvitationEmailTokenMutation({
    onError({ message }) {
      setTokenValid(false)
      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted({ verifyInvitationEmailToken }) {
      const { email } = verifyInvitationEmailToken
      !!email && setUserValue({ email })
      setTokenValid(true)
    },
  })

  const verifiedEmail = async () => {
    if (userToken) {
      await verifyUser({
        variables: {
          token: userToken
        }
      })
    }
  }

  useEffect(() => {
    verifiedEmail();

    if (isVerified) {
      setTimeout(() => {
        setIsVerified(false)
      }, 2000);
    }
    // eslint-disable-next-line
  }, [])


  const methods = useForm<RegisterUserInput>({
    mode: "all",
    // @ts-expect-error
    resolver: yupResolver(registerUserValidationSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const { handleSubmit, setValue } = methods;

  const [signUp, { loading }] = useUserRegistrationWithInvitationMutation({
    onError({ message }) {
      if (message.toLowerCase() === BAD_REQUEST) {
        return Alert.error(BAD_USER_INPUT);
      }
      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted({ userRegistrationWithInvitation: { emailVerified } }) {
      if (emailVerified) {
        navigate(LOGIN_ROUTE)
        return Alert.success(USER_REGISTERED_SUCCESSFULLY);
      }
    },
  });

  const onSubmit = async (data: SignupInterface) => {
    const { fullName, password } = data

    if (userToken) {
      await signUp({
        variables: {
          registerUserInput: {
            token: userToken,
            fullName,
            password,
          }
        }
      })
    }
  };

  const { email: userEmail } = userValue

  useEffect(() => {
    userEmail && setValue('email', userEmail)
    // eslint-disable-next-line
  }, [userEmail])

  return (
    <Box sx={{ marginTop: "1rem" }}>
      {verifyUserLoading ?
        <Box height='100vh' sx={flexCenter} flexDirection="column">
          <CircularProgress color="primary" />
          <Typography variant="h5" sx={{ marginTop: '2rem', fontWeight: '500' }}>{VERIFY_TOKEN_TEXT}</Typography>
        </Box>
        :
        <AuthLayout title={tokenValid && !isVerified ? SIGN_UP : ""} subTitle={tokenValid && !isVerified ? ENTER_LOGIN_DETAILS : ""}>
          <Grow in={tokenValid && isVerified} mountOnEnter unmountOnExit>
            <Box textAlign='center'>
              {tokenValid && isVerified &&
                <>
                  <Box marginBottom='1rem'>
                    <CheckCircleIcon sx={{ width: '64px', height: '64px', fill: palette.green }} />
                  </Box>

                  <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: '500' }}>{EMAIL_VERIFIED}</Typography>
                </>
              }
            </Box>
          </Grow>

          <Grow in={tokenValid && !isVerified} mountOnEnter unmountOnExit>
            <Box marginTop='2rem'>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <CustomController
                    controllerName="fullName"
                    controllerLabel="Full Name"
                    fieldType="text"
                  />

                  <Box marginTop="0.5rem" position="relative">
                    <CustomController
                      controllerName="email"
                      controllerLabel="Email address"
                      fieldType="email"
                      readOnly
                    />
                    <LockOutlinedIcon color='secondary' sx={lockedFieldIcon} />
                  </Box>

                  <Box marginTop="0.5rem">
                    <CustomController
                      controllerName="password"
                      controllerLabel="Password"
                      fieldType="password"
                      isPassword
                    />
                  </Box>

                  <Box>
                    <CustomController
                      controllerName="repeatPassword"
                      controllerLabel="Re enter your password"
                      fieldType="password"
                      isPassword
                    />
                  </Box>

                  <Box marginTop={3} marginBottom={3}>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="primary"
                      disabled={loading}
                      endIcon={loading && <CircularProgress size={20} color="inherit" />}
                    >
                      {SIGN_UP}
                    </Button>
                  </Box>

                  <Box
                    marginTop={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h4" sx={{ marginRight: "5px" }}>
                      Already have an account?
                    </Typography>
                    <Typography
                      color="primary"
                      component={Link}
                      to="/login"
                      variant="h4"
                    >
                      Login
                    </Typography>
                  </Box>
                </form>
              </FormProvider>
            </Box>
          </Grow>

          <Grow in={!tokenValid && !isVerified} mountOnEnter unmountOnExit>
            <Box textAlign='center'>
              {!tokenValid && !isVerified &&
                <Box textAlign='center'>
                  <Box marginBottom='1rem'>
                    <ErrorIcon sx={{ width: '64px', height: '64px', fill: palette.red }} />
                  </Box>

                  <Typography variant="h5" sx={{ marginBottom: '.5rem', fontWeight: '500' }}>Token not verified!</Typography>
                </Box>
              }
            </Box>
          </Grow>
        </AuthLayout>
      }
    </Box>
  );
};
