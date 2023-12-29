import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EmptyDataProps } from '../../interfaceTypes'
import { emptyBox } from '../../theme/styleConstants'
import { images } from '../../../assets/images'

export const NoDataFound: FC<EmptyDataProps> = ({ description, button, height }) => (
  <Box height={height} sx={emptyBox}>
    <Box component='img' src={images.EMPTY} alt='empty state' />

    <Typography variant='h5' marginTop='2rem'>{description}</Typography>

    {button &&
      <Box component={Link} marginTop='2rem' to='/brand-settings'>Brand Settings</Box>
    }
  </Box>
)
