import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ThreeCircles } from "react-loader-spinner";
import palette from "../../theme/palette";
import { AppLoading } from "../../theme/styleComponents";

export const AppLoader: FC = () => (
  <AppLoading>
    <Box pb={3}>
      <ThreeCircles height={50} width={50} color={palette.primary.main} />
    </Box>

    <Typography>App is loading please wait...</Typography>
  </AppLoading>
)