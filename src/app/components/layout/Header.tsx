// packages import
import { AppBar, Box, Button, ListItemButton, MenuItem, Toolbar, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { NavLink, Link as ReactRouterLink, useNavigate } from "react-router-dom";
// others
import { HeaderLogo } from "../../../assets/svgs";
import { AUTH_TOKEN, SUMMARY_DETAIL, TOOLTIP_POPPER_PROPS, USER_EMAIL } from "../../constants";
import { AuthContext } from "../../context";
import { AuthActionType } from "../../context/AuthContextReducer";
import palette from "../../theme/palette";
import { CustomMenu, Logo } from "../../theme/styleComponents";
import { flexCenter, logoBox } from "../../theme/styleConstants";
import { getToken } from "../../utils";
import { LazyLoadImage } from "../common/LazyLoadImage";
import { MobileDrawer } from "./Drawer";

export const Header: FC = () => {
  const { dispatch, currentUser, isAdmin } = useContext(AuthContext)
  const mediumViewport = useMediaQuery('(min-width:768px)');
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { email, fullName, profilePicture } = currentUser || {}
  const { url } = profilePicture ?? {}

  const { black, primary: { main: primary } } = palette

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER_EMAIL);
    localStorage.removeItem(SUMMARY_DETAIL)
    dispatch({ type: AuthActionType.SET_CURRENT_USER, currentUser: null })
    dispatch({ type: AuthActionType.SET_IS_LOGGED_IN, isLoggedIn: false })
    navigate('/login');
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const jobUrl = localStorage.getItem(JOB_PATH)

  useEffect(() => {
    !getToken() && logout()
    //eslint-disable-next-line
  }, [getToken()])

  return (
    <AppBar position="sticky">
      {mediumViewport ?
        <Toolbar disableGutters sx={{ maxWidth: "1500px", padding: '10px 24px', margin: '0 auto', width: '100%' }}>
          <Box display="flex" flex={1}>
            <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
              <Box display='flex' alignItems='center'>
                <ReactRouterLink to='/'>
                  <Logo>
                    <Box component='img' src={HeaderLogo} alt='Operator logo' />
                  </Logo>
                </ReactRouterLink>
              </Box>

              <Box display='flex' alignItems='center' px='20px' gap='30px'>
                <ListItemButton component={NavLink} to="/" sx={{ color: primary }} selected={location.pathname === '/portal'}>
                  Dashboard
                </ListItemButton>
                
                {isAdmin && <ListItemButton component={NavLink} to="/users" sx={{ color: primary }} selected={location.pathname.includes("users")}>
                  Users
                </ListItemButton>}
              </Box>
            </Box>
          </Box>

          <Box sx={{ ...flexCenter, gap: '30px' }}>
            <Box>
              <Box display="flex" justifyContent='space-between'>
                <Box sx={{ flexGrow: 0 }}>
                  <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Box display='flex' justifyContent='start' alignItems="center">
                      <Box sx={{ ...logoBox, mt: '0', mr: '5px' }} >
                        <LazyLoadImage width={50} height={50} styleProps={{ width: '50px', height: 'auto', maxHeight: '100%', objectFit: 'cover' }} signedUrl={url || ""} isRound={true} />
                      </Box>

                      <Box textAlign='left'>
                        <Tooltip title={fullName} placement="top" PopperProps={TOOLTIP_POPPER_PROPS}>
                          <Typography sx={{ maxWidth: '150px' }} variant="body1" textTransform="capitalize" fontWeight='600' noWrap>
                            {fullName || ""}
                          </Typography>
                        </Tooltip>

                        <Tooltip title={email} placement="bottom-start" PopperProps={TOOLTIP_POPPER_PROPS}>
                          <Typography sx={{ maxWidth: '150px' }} variant="body2" textTransform="none" noWrap>{email || ""}</Typography>
                        </Tooltip>
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
                      <MenuItem>
                        <Box width='100%'>
                          <ReactRouterLink to='/profile'>
                            <Typography variant="h6" color={black} onClick={handleCloseUserMenu}>Profile</Typography>
                          </ReactRouterLink>
                        </Box>
                      </MenuItem>

                      <MenuItem>
                        <Box width='100%'>
                          <ReactRouterLink to='/login'>
                            <Typography variant="h6" color={black} onClick={logout}>Logout</Typography>
                          </ReactRouterLink>
                        </Box>
                      </MenuItem>
                    </Box>
                  </CustomMenu>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar> : <MobileDrawer logout={logout} />
      }
    </AppBar>
  )
}