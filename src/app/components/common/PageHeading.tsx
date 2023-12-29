import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { PageHeadingProps } from '../../interfaceTypes'

export const PageHeading: FC<PageHeadingProps> = ({ title, subTitle, variant, marginTop }) => (
  <Box sx={{ paddingTop: marginTop || "25px" }}>
    <Typography variant={variant || 'h5'}>{title}</Typography>

    {subTitle &&
      <Box display='flex'>
        <Typography variant='body2'>{subTitle}</Typography>
      </Box>
    }
  </Box>
)