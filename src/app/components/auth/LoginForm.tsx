//packages block
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// component block
import { Alert } from "../common/Alert";
import { CustomController } from "../common/CustomController";
// others
import { LoginUserInput, UserRoles, useLoginMutation } from "../../../generated";
import { AUTH_TOKEN, EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE, FORBIDDEN_EXCEPTION, LOGIN, LOGIN_FIELDS, SUMMARY_DETAIL } from "../../constants";
import { AuthContext } from "../../context";
import { AuthActionType } from "../../context/AuthContextReducer";
import { firstLetterUppercase } from "../../utils";
import { loginValidationSchema } from "../../validationSchema";

export const LoginForm = (): JSX.Element => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const methods = useForm<LoginUserInput>({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),

    defaultValues: {
      email: "",
      password: "",

    },
  });

  const { handleSubmit } = methods;

  const [login, { loading }] = useLoginMutation({
    onError({ message }) {
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION) {
        return Alert.error(EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE);
      }

      return Alert.error(firstLetterUppercase(message || ""));
    },

    onCompleted(data) {
      if (data) {
        const { login: { accessToken, roles } } = data;

        if (accessToken && roles) {
          localStorage.setItem(AUTH_TOKEN, accessToken)
          const isAdmin = roles.find((role) => role.role === UserRoles.Admin || role.role === UserRoles.SuperAdmin)
          const isClient = roles.find((role) => role.role === UserRoles.Client)

          dispatch({ type: AuthActionType.SET_USER_LOADER, userLoader: true })
          dispatch({ type: AuthActionType.SET_IS_ADMIN, isAdmin: !!isAdmin })
          dispatch({ type: AuthActionType.SET_IS_CLIENT, isClient: !!isClient })
          dispatch({ type: AuthActionType.SET_IS_LOGGED_IN, isLoggedIn: true })
          const summaryDetail = localStorage.getItem(SUMMARY_DETAIL)
          if (summaryDetail) {
            return navigate(summaryDetail)
          }
          navigate('/')
        }
      }
    },
  });

  const onSubmit = async (data: LoginUserInput) => {
    await login({
      variables: {
        loginUser: data,
      },
    });
  };

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {LOGIN_FIELDS.map((field) => {
            const { fieldType, name, title } = field;

            return (
              <CustomController
                key={`${name}-${title}`}
                controllerName={name}
                controllerLabel={title}
                fieldType={fieldType}
                isPassword={fieldType === 'password'}
              />
            );
          })}

          <Box>
            <Box marginTop="1rem" textAlign="right">
              {/* <FormControlLabel
                sx={{ width: '100%', margin: '0' }}
                control={
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                }

                label='Remember me'
              /> */}

              <Typography
                variant="h4"
                component={Link}
                to="/forgot-password"
                color="primary"
              >
                Forgot Password?
              </Typography>
            </Box>
          </Box>

          <Box marginTop={3}>
            <Button variant="contained" type="submit" fullWidth color="primary" disabled={loading}
              endIcon={loading && <CircularProgress size={20} color="inherit" />}
            >
              {LOGIN}
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};
