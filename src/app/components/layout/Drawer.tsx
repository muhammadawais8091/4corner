// packages import
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, Divider, Drawer, ListItemButton, MenuItem, Typography } from "@mui/material";
import { FC, KeyboardEvent, MouseEvent, useContext, useState } from "react";
import { Link, NavLink, Link as ReactRouterLink, useNavigate } from "react-router-dom";
// others
import { images } from "../../../assets/images";
import { DASHBOARD_LINK, UPLOAD_DOC } from '../../constants';
import { AuthContext } from "../../context";
import palette from "../../theme/palette";
import { CustomMenu, DrawerList } from "../../theme/styleComponents";
import { drawerImage, flexCenter } from "../../theme/styleConstants";
import { CustomButton } from '../common/CustomButton';
import { HeaderLogo } from '../../../assets/svgs';


export const MobileDrawer: FC<{ logout: () => void }> = ({ logout }) => {
  const { currentUser, isAdmin, isAttorney, isClient } = useContext(AuthContext)
  const { fullName } = currentUser || {}
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [toggleDrawerState, setToggleDrawerState] = useState(false);
  const navigate = useNavigate()

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggleDrawerState(!toggleDrawerState);
  };

  return (
    <Box sx={{ padding: '16px 18px' }}>
      <Box sx={{ ...flexCenter, justifyContent: 'space-between' }}>
        <Box sx={flexCenter}>
          {(isAdmin || isClient) &&
            <Button onClick={toggleDrawer()} sx={{ padding: 0, minWidth: '30px', marginRight: '15px' }}>
              <MenuIcon />
            </Button>
          }

          <Link to='/'>
            <Box component='img' sx={{ maxWidth: '170px', width: '100%', display: 'block' }} src={HeaderLogo} alt='Logo' />
          </Link>
        </Box>

        <Box sx={flexCenter}>
          <Box display="flex" justifyContent='space-between'>
            <Box sx={{ flexGrow: 0 }}>
              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Box display='flex' justifyContent='start' alignItems='center'>
                  <Avatar sx={{ marginRight: '10px' }} src={'' || ''} />

                  <Box textAlign='left'>
                    <Typography variant="body1" textTransform="capitalize">{fullName}</Typography>
                  </Box>
                </Box>
              </Button>

              <CustomMenu
                sx={{ mt: '45px' }}
                id="headerCompaniesSelect"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box>
                  {isClient &&
                    <MenuItem>
                      <Box width='100%'>
                        <ReactRouterLink to='/profile'>
                          <Typography variant="h6" color={palette.black} onClick={handleCloseUserMenu}>Profile</Typography>
                        </ReactRouterLink>
                      </Box>
                    </MenuItem>
                  }

                  <MenuItem>
                    <Box width='100%'>
                      <ReactRouterLink to='/login'>
                        <Typography variant="h6" color={palette.black} onClick={logout}>Logout</Typography>
                      </ReactRouterLink>
                    </Box>
                  </MenuItem>
                </Box>
              </CustomMenu>
            </Box>
          </Box>
        </Box>
      </Box>

      {(isAdmin || isAttorney) &&
        <Drawer
          anchor='left'
          open={toggleDrawerState}
          onClose={toggleDrawer()}
        >
          <Box
            sx={{ width: '300px', padding: '10px 18px' }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
          >
            <Link to='/'>
              <Box component='img' sx={{ ...drawerImage }} src={images.LOGO} alt='logo' />
            </Link>

            <Divider sx={{ marginBottom: '25px', marginInline: '-18px' }} />

            {DASHBOARD_LINK.map((item) => {
              const { link, title } = item

              return (
                <DrawerList key={title}>
                  <ListItemButton component={NavLink} to={link} key={title} sx={{ paddingLeft: 0, textTransform: 'none' }}>{title}</ListItemButton>
                </DrawerList>
              )
            })}

            <CustomButton sx={{ mt: '20px' }} onClick={() => navigate('/upload-document')}>
              {UPLOAD_DOC}
            </CustomButton>
          </Box>
        </Drawer>
      }
    </Box>
  );
}