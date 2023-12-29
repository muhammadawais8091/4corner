import { Alert, AlertColor, AlertTitle, Box, Button, Collapse, Typography } from "@mui/material";
import { FC, useState } from "react";
import { customTheme } from "../../theme";
import { StatusType } from "../../../generated";
import { Link } from "react-router-dom";

export const CustomAlert: FC<{ alertType: AlertColor, alertTitle: string, buttonText: string, description: JSX.Element | string, fileStatus?: StatusType }> = ({ alertType, alertTitle, buttonText, description, fileStatus }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(false);
  }

  return (
    <Box>
      <Collapse in={open}>
        <Alert
          severity={alertType}
          sx={{ position: 'relative', width: '100%', marginY: '1rem' }}
          action={
            <Button color="inherit" size="small"
              onClick={handleClick}
              sx={{
                textTransform: 'capitalize', [customTheme.breakpoints.down('sm')]: {
                  position: 'absolute',
                  right: 0,
                  top: '6px',
                }
              }}>
              {buttonText}
            </Button>
          }
        >
          <AlertTitle sx={{ marginTop: '-4px' }}><Typography variant="caption">{alertTitle}</Typography></AlertTitle>

          <Typography variant="subtitle2">
            {description}
          </Typography>

          {fileStatus === StatusType.Failed &&
            <Typography variant="subtitle2">
              To easily convert your PDF file to TXT format, simply click on this link: <Link to="https://www.zamzar.com/convert/pdf-to-txt" target="_blank">Convert PDF to TXT.</Link>
            </Typography>
          }
        </Alert>
      </Collapse>
    </Box>
  )
}