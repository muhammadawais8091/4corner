import { ButtonGroup, Button } from '@mui/material'
import React, { FC } from 'react'
import { CustomButtonGroupInterface } from '../../interfaceTypes'

export const CustomButtonGroup: FC<CustomButtonGroupInterface> = ({ btnText1, btnText2, btnText3 }) => (
  <ButtonGroup variant="outlined" color="secondary">
    <Button sx={{ color: '#000000', fontWeight: '700' }}>{btnText1}</Button>
    <Button sx={{ color: '#000000', fontWeight: '700' }}>{btnText2}</Button>
    <Button sx={{ color: '#000000', fontWeight: '700' }}>{btnText3}</Button>
  </ButtonGroup>
)