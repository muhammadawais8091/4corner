import EditIcon from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import { FC, useContext } from 'react'
import { LazyLoadImage } from '../components/common/LazyLoadImage'
import { PageHeading } from '../components/common/PageHeading'
import { ProfileForm } from '../components/profile/ProfileForm'
import { AppContext, AuthContext } from '../context'
import { ActionType } from '../context/AppContextReducer'
import palette from '../theme/palette'
import { logoBox } from '../theme/styleConstants'

export const ProfileContainer: FC = () => {
  const { currentUser } = useContext(AuthContext)
  const { profilePicture } = currentUser ?? {}
  const { url } = profilePicture ?? {}
  const { isOpen, dispatch } = useContext(AppContext);

  const { white } = palette

  const handleProfileDialog = () => {
    dispatch({ type: ActionType.SET_IS_OPEN, isOpen: !isOpen })
  };

  return (
    <Box>
      <Box display='flex' justifyContent='space-between'>
        <PageHeading title='Profile' subTitle='Here is your profile summary' />

        <Box sx={logoBox} onClick={handleProfileDialog}>
          <LazyLoadImage width={50} height={50} styleProps={{ width: '50px', height: 'auto', maxHeight: '100%' }} signedUrl={url || ""} />

          <Box className='logoOverlay'>
            <EditIcon sx={{ width: '16px', height: '16px', color: white }} />
          </Box>
        </Box>
      </Box>

      <ProfileForm />
    </Box>
  )
}
