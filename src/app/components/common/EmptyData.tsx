import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { EmptyDataInterface } from '../../interfaceTypes';
import { EmptyDataBox } from '../../theme/styleComponents';

export const EmptyData: FC<EmptyDataInterface> = ({ title, description, btnText }) => (
  <EmptyDataBox>
    {/* <Box sx={{ marginBottom: '2rem' }} component='img' src={images.NO_WIDGET} alt='No Widget' /> */}

    <Typography variant="subtitle1" sx={{ marginBottom: '1rem' }}>{title}</Typography>

    <Box maxWidth='321px' textAlign='center'>
      <Typography variant="h4" sx={{ opacity: '0.6', marginBottom: '2rem' }}>{description}</Typography>
    </Box>

    {btnText && <Button color="primary" variant="contained" startIcon={<AddIcon />} sx={{ textTransform: 'capitalize' }}>{btnText || ""}</Button>}
  </EmptyDataBox>
)