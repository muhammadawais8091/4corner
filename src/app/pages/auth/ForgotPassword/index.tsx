// component import
import { ForgotPasswordForm } from "../../../components/auth/ForgotPasswordForm"
import { AuthLayout } from "../../../components/auth/Layout"
// others
import { FORGET_PASSWORD, FORGET_PASSWORD_TEXT } from "../../../constants"

export const ForgotPassword = (): JSX.Element => (
  <AuthLayout title={FORGET_PASSWORD} subTitle={FORGET_PASSWORD_TEXT}>
    <ForgotPasswordForm />
  </AuthLayout>
)