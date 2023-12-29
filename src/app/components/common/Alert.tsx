//packages block
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { ProviderContext, VariantType, useSnackbar } from 'notistack';
import { FC } from "react";
//interface block
import { CloseSnackbarProps } from "../../interfaceTypes";

let useSnackbarRef: ProviderContext;

export const SnackbarUtilsConfiguration: FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const CloseButton: FC<CloseSnackbarProps> = ({ id }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton
      color="inherit"
      size="small"
      onClick={() => closeSnackbar(id)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export const Alert = {
  success(message: string) {
    this.toast(message, "success");
  },
  warning(message: string) {
    this.toast(message, "warning");
  },
  info(message: string) {
    this.toast(message, "info");
  },
  error(message: string) {
    this.toast(message, "error");
  },
  toast(message: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
};

