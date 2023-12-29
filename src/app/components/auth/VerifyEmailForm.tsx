import { Typography } from "@mui/material"
import { FC, useState } from "react"
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from "@mui/material";
import palette from "../../theme/palette";
import { Link } from "react-router-dom";
// import { AUTH_LINKS } from "../../constants";
import { CheckEmailWrap } from "../../theme/styleComponents";
import { AUTH_LINKS } from "../../constants";

export const VerifyEmailForm: FC = (): JSX.Element => {
  const [verified] = useState<string>('verify');
  const isVerify = verified !== 'verify'

  const { lightBlue, red } = palette

  return (
    <CheckEmailWrap>
      <Box textAlign='center'>
        <Box marginBottom='1rem'>
          <CheckCircleIcon sx={{ width: '64px', height: '64px', fill: lightBlue }} />
        </Box>

        <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: '500' }}>Success!</Typography>

        <Typography>Registration completed successfully. <Box sx={{ fontWeight: '700', textDecoration: 'underline' }} component={Link} to={AUTH_LINKS.LOGIN_LINK}>Click</Box> here to login.
        </Typography>
      </Box>

      {isVerify &&
        <Box textAlign='center'>
          <Box marginBottom='1rem'>
            <ErrorIcon sx={{ width: '64px', height: '64px', fill: red }} />
          </Box>

          <Typography variant="h5" sx={{ marginBottom: '.5rem', fontWeight: '500' }}>Email not verified!</Typography>

          <Typography variant="h6">Session token is expired. <Link to="/">Click</Link>  here to resend email.</Typography>
        </Box>
      }
    </CheckEmailWrap>
  )
}