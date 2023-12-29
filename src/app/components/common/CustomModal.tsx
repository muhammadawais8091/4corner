// packages import
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography, Zoom } from "@mui/material";
import { FC } from "react";
// others
import { CustomModalProps } from "../../interfaceTypes";
import palette from "../../theme/palette";
import { flexCenter } from "../../theme/styleConstants";

export const CustomModal: FC<CustomModalProps> = ({ isOpen, handleClose, title, subTitle, children, infoIcon, maxWidth, hideBackdrop, showCloseIcon }) => (
  <Dialog TransitionComponent={Zoom} open={isOpen} onClose={handleClose} maxWidth={false} sx={{ maxWidth: maxWidth, margin: 'auto', zIndex: 99999 }} fullWidth hideBackdrop={hideBackdrop}>
    <Box sx={{ ...flexCenter, justifyContent: 'space-between' }} pr={1}>
      {title &&
        <DialogTitle sx={{ padding: '16px', flex: "1" }} variant="h5" fontWeight={400}>
          <Box display='flex' flex={1} alignItems='center'>
            {infoIcon &&
              <InfoIcon sx={{ fill: palette.red, width: '30px', height: '30px' }} />
            }

            <Typography variant="h5" fontWeight='500' marginLeft={infoIcon ? '10px' : '0'}>{title}</Typography>
          </Box>

          {subTitle &&
            <Typography variant="body2" sx={{ opacity: '0.6' }}>{subTitle}</Typography>
          }
        </DialogTitle>
      }

      {showCloseIcon &&
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      }
    </Box>

    <DialogContent sx={{ padding: '0px 16px 16px' }}>{children}</DialogContent>
  </Dialog>
)