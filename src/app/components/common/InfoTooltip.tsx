import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton, InputAdornment, Popover, Typography } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { InfoTooltipProps } from "../../interfaceTypes";
import palette from '../../theme/palette';

export const InfoTooltip: FC<InfoTooltipProps> = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <InputAdornment position="end">
        <IconButton
          size="small"
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>

      </InputAdornment>

      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none', zIndex: 99999 }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ maxWidth: '200px', backgroundColor: palette.black, color: palette.white, p: 1 }} variant="h3">{title}</Typography>
      </Popover>
    </>
  )
}