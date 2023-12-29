import React, { FC } from 'react'
import { CustomEntityInterface } from '../../interfaceTypes'
import { Box, Typography } from '@mui/material'
import { fileCount } from '../../theme/styleConstants'

export const CustomEntity: FC<CustomEntityInterface> = ({ customEntityText, customEntityCount }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', pt: '25px' }}>
    <Typography variant="h5" fontWeight='700'>{customEntityText}</Typography>

    <Box sx={fileCount}>{customEntityCount}</Box>
  </Box>
)

