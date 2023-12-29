import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { StatusType } from '../../../generated';
import { Box, Chip } from '@mui/material';
import { summaryDetailFileStatus } from '../../theme/styleConstants';

export const getSummaryStatus = (summaryStatus?: StatusType): JSX.Element => {
  switch (summaryStatus) {
    case StatusType.Completed:
      return renderStatus(<CheckCircleOutlineIcon color='inherit' />, 'Completed', StatusType.Completed);
    case StatusType.Failed:
      return renderStatus(<CancelOutlinedIcon color='inherit' />, 'Failed', StatusType.Failed);
    case StatusType.Active:
      return renderStatus(<AccessTimeIcon color='inherit' />, 'In progress', StatusType.Active);
    default:
      return <></>;
  }
};

const renderStatus = (Icon: JSX.Element, label: string, status: StatusType): JSX.Element => (
  <Box display='flex' alignItems='center' gap='5px' color={summaryDetailFileStatus(status).color}>
    <Chip
      sx={summaryDetailFileStatus(status)}
      label={label}
      variant="outlined"
      icon={Icon}
    />
  </Box>
)
