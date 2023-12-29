// component import
import { SetPasswordForm } from "../../../components/auth/SetPasswordForm"
import { AuthLayout } from "../../../components/auth/Layout"
// others
import { CHANGE_PASSWORD } from "../../../constants"

export const SetPassword = (): JSX.Element => (
  <AuthLayout title={CHANGE_PASSWORD}>
    <SetPasswordForm />
  </AuthLayout>
)