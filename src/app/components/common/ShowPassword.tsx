// packages block
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { FC } from "react";
// constants and interfaces block
import { PASSWORD } from "../../constants";
import { IShowPasswordProps } from "../../interfaceTypes";

export const ShowPassword: FC<IShowPasswordProps> = ({ isPassword, passwordType, handleShowPassword }) => (
  <InputAdornment position="end">
    {isPassword &&
      <IconButton onClick={handleShowPassword} color="secondary">
        {passwordType !== PASSWORD ? <Visibility color="secondary" /> : <VisibilityOff color="secondary" />}
      </IconButton>
    }
  </InputAdornment>
);