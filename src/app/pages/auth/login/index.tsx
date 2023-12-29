// component import
import { AuthLayout } from "../../../components/auth/Layout";
import { LoginForm } from "../../../components/auth/LoginForm";
// other imports
import { ENTER_LOGIN_DETAILS, SIGN_IN } from "../../../constants";

export const Login = (): JSX.Element => (
  <AuthLayout title={SIGN_IN} subTitle={ENTER_LOGIN_DETAILS}>
    <LoginForm />
  </AuthLayout>
)