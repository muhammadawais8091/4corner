import { Button } from '@mui/material'
import palette from '../../theme/palette'
import { FC } from 'react'
import { CustomButtonInterface } from '../../interfaceTypes'

export const CustomButton: FC<CustomButtonInterface> = ({ children, onClick, sx}) => {
  const { white, darkBlue } = palette

  return (
    <Button variant="contained" onClick={onClick} sx={{ py: '5px', color: white, bgcolor: darkBlue, ...sx}}>
      {children}
    </Button>
  )
}