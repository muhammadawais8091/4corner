// packages block
import { FC } from "react";
import { Box, Typography } from "@mui/material";
// component block
import { AuthLayoutContainer } from "../../theme/styleComponents";
import { AuthLayoutProps } from "../../interfaceTypes";
import { images } from "../../../assets/images";
import palette from "../../theme/palette";

export const AuthLayout: FC<AuthLayoutProps> = ({ children, title, subTitle }) => (
  <AuthLayoutContainer>
    <Box width='100%'>
      <Box textAlign='center' pb='40px'>
        <Box component='img' src={images.LOGO} alt='4corners logo' maxWidth='300px' />
      </Box>

      <Typography variant="h5" fontWeight='700'>{title}</Typography>

      {subTitle &&
        <Box height={24} marginTop='10px' marginBottom='15px'>
          <Typography component='p' color={palette.grayOne}>{subTitle}</Typography>
        </Box>
      }

      {children}
    </Box>
  </AuthLayoutContainer>
)