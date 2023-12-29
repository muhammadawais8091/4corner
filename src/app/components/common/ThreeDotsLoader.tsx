import { Box } from '@mui/material'
import { FC } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { ThreeDostLoaderProps } from '../../interfaceTypes'
import palette from '../../theme/palette'
import { brandSettingsCustomLoader } from '../../theme/styleConstants'

export const ThreeDotsLoader: FC<ThreeDostLoaderProps> = ({ height }) => (
  <Box height={height} sx={brandSettingsCustomLoader}>
    <ThreeDots
      height="30"
      width=""
      radius="9"
      color={palette.primary.main}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </Box>
)
