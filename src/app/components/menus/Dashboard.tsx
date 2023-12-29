import { Box, IconButton } from '@mui/material';
import { Visibility} from "@mui/icons-material";
import { TrashIcon } from '../../../assets/svgs';

export const Dashboard = () => {

  return (
    <Box>
      <Box display='flex' gap="10px">
        <IconButton>
          <TrashIcon />
        </IconButton>

        <IconButton>
          <Visibility />
        </IconButton>
      </Box>
    </Box>
  )
}
