import { Button, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import palette from "../../theme/palette";
import { FC } from "react";
import { BackButtonProps } from "../../interfaceTypes";

export const BackButton: FC<BackButtonProps> = ({handleClick}) => {
  const { grayOne } = palette;

  return (
    <Button sx={{ p: '0 1px 0 0' }} onClick={handleClick}>
      <ArrowBackIcon color="secondary" />

      <Typography sx={{ fontSize: '16px', fontWeight: 600, pl: 1, color: grayOne }}>Back</Typography>
    </Button>
  )
}