import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SummaryDetailHeaderProps } from '../../interfaceTypes';
import { BackButton } from '../common/BackButton';
import { getSummaryStatus } from '../common/SummaryStatus';

export const SummaryDetailHeader: FC<SummaryDetailHeaderProps> = ({ fileStatus }) => (
  <Grid container spacing={2} rowSpacing={2}>
    <Grid item xs={8}>
      <Box p="20px 0px 15px 20px" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Link to='/'>
            <BackButton />
          </Link>
        </Box>

        {getSummaryStatus(fileStatus)}
      </Box>
    </Grid>
  </Grid>
)