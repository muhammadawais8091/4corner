import Avatar from '@mui/material/Avatar';
import { FC } from 'react';
import { AvatarIconInterface } from '../../interfaceTypes';

export const AvatarIcon: FC<AvatarIconInterface> = ({ color, bgColor, text }) => (
  <Avatar sx={{ color, backgroundColor: bgColor }}>
    {text}
  </Avatar>
)
