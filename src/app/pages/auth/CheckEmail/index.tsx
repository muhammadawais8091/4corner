import { Box, Typography, Grow } from "@mui/material"
import { CheckEmailIcon } from "../../../../assets/svgs"
import { CheckEmailWrap } from "../../../theme/styleComponents"
import palette from "../../../theme/palette"
import { Link } from "react-router-dom"

export const CheckEmail = () => {
  const { grayOne } = palette;

  return (
    <CheckEmailWrap>

      <Grow in={true} timeout={1000}>
        <Box textAlign='center'>
          <CheckEmailIcon />
        </Box>
      </Grow>

      <Typography variant="h5" pt='32px' fontWeight='700'>Please check your email!</Typography>

      <Box marginTop='16px'>
        <Typography component='p' variant="body1" color={grayOne}>
          We've emailed you a verification link on your email address acb@domain.com, use the link to verify your email.
        </Typography>
      </Box>

      <Box marginTop='1rem' >
        <Typography component={Link} to='/login' color="primary" variant="h4">
          Back to Login
        </Typography>
      </Box>
    </CheckEmailWrap>
  )
}