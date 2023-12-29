import { FC, MouseEvent, useState } from 'react'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import palette from '../../theme/palette';
import { TableActionButtonInterface } from '../../interfaceTypes';

export const TableActionButton: FC<TableActionButtonInterface> = ({ editBtnText, removeBtnText, editBtnHandler, removeBtnHandler }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEdit = () => {
    editBtnHandler()
    setAnchorEl(null);
  }

  const handleRemove = () => {
    removeBtnHandler()
    setAnchorEl(null);
  }

  return (
    <Box>
      <IconButton
        id={"id"}
        aria-controls={open ? 'header-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="firstHeaderMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: { minWidth: "200px", }
        }}
      >
        <MenuItem onClick={handleEdit}>{editBtnText}</MenuItem>
        <MenuItem onClick={handleRemove} sx={{ color: palette.redTwo }}>{removeBtnText}</MenuItem>
      </Menu>
    </Box>
  )
}