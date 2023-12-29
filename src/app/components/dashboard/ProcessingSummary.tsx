import { Box, Typography, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProcessingSummaryInterface } from '../../interfaceTypes';

export const ProcessingSummary: FC<ProcessingSummaryInterface> = ({ sx }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/")
  };

  return (
    <Box sx={sx} maxWidth="500px" margin='auto' textAlign="center">
      <Box fontSize="120px" height="150px">
        <MailOutlineIcon color='primary' fontSize='inherit' />
      </Box>

      <Typography variant="h5">
        Processing Summary
      </Typography>

      <Typography variant="subtitle2" sx={{ mt: 2, color: 'grayTwo' }}>
        Your summary is currently being generated. You will receive an email notification once it's ready.
        Meanwhile, you can check the list of generated summaries by clicking the button below.
      </Typography>

      <Box mt={3}>
        <Button color="primary" variant="contained" onClick={handleNavigate}>
          Go Back to Dashboard
        </Button>
      </Box>
    </Box>
  )
}
