import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Chip, Collapse, Grid, IconButton, Typography } from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';
import { AppContext, AuthContext } from '../../context';
import palette from '../../theme/palette';
import { generalInformation } from '../../theme/styleConstants';
import { firstLetterUppercase } from '../../utils';
import { ThreeDotsLoader } from '../common/ThreeDotsLoader';
import { SetPassword } from './SetPassword';
import { UpdateProfileDialogue } from './UpdateProfileDialogue';
import { ActionType } from '../../context/AppContextReducer';
import { UploadImageModal } from './UploadImage';

export const ProfileForm: FC = () => {
  const { currentUser, userLoader } = useContext(AuthContext)
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const { isOpen, dispatch } = useContext(AppContext)
  const { id: userId, fullName = undefined, email = undefined,
    roles = [] } = currentUser || {}

  const handleSetNameDialog = () => {
    setIsEditOpen(!isEditOpen)
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })

  const userRoles = roles?.map(userRole => {
    const role = userRole?.role.split("_").join(" ")
    return firstLetterUppercase(role || '')
  })

  const handleProfileDialog = () => {
    dispatch({ type: ActionType.SET_IS_OPEN, isOpen: !isOpen })
  };

  return (
    <>
      {userLoader ?
        <ThreeDotsLoader height="calc(100vh - 300px)" />
        :
        <Box marginTop='2rem' position='relative'>
          <Box marginBottom='2rem' borderBottom={`1px solid ${palette.lightBorderColor}`}>
            <Box sx={generalInformation}>
              <Typography variant="h6">General information</Typography>
            </Box>

            <Grid container spacing={2} rowSpacing={2}>
              <Grid item md={4} xs={12}>
                <Box>
                  <Typography variant='body2'>Email</Typography>

                  <Typography sx={{ marginTop: '10px', marginBottom: '20px' }} variant='h4'>{email || ""}</Typography>
                </Box>
              </Grid>

              <Grid item md={4} xs={12}>
                <Box>
                  <Typography variant='body2'>Role</Typography>

                  <Box sx={{ marginTop: '10px', marginBottom: '20px', display: 'flex', gap: '10px' }}>
                    {userRoles?.map((role) =>
                      <Chip
                        key={role}
                        sx={{ fontWeight: '600', border: `1px solid ${palette.primary.main}` }}
                        label={role} variant="outlined" color="default"
                      />
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box marginBottom='2rem' borderBottom={`1px solid ${palette.lightBorderColor}`}>
            <Box sx={generalInformation}>
              <Typography variant="h6">Profile settings</Typography>

              <IconButton onClick={handleSetNameDialog}>
                {isEditOpen ? <ArrowBackIcon color='primary' /> : <EditIcon color='primary' />}
              </IconButton>
            </Box>

            <Collapse in={!isEditOpen}>
              <Grid container spacing={2} rowSpacing={2}>
                <Grid item md={4} xs={12}>
                  <Box>
                    <Typography variant='body2'>Name</Typography>

                    <Typography sx={{ marginTop: '10px', marginBottom: '40px' }} variant='h4'>{fullName || ""}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Collapse>

            <Collapse in={isEditOpen}>
              <UpdateProfileDialogue isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
            </Collapse>

          </Box>

          <SetPassword />
        </Box>
      }

      <UploadImageModal
        isOpen={isOpen}
        handleClose={handleProfileDialog}
        entityType="users"
        typeId={userId || ""}
      />
    </>
  )
}
