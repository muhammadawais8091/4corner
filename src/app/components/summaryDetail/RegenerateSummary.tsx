import { Button, DialogActions, Typography } from '@mui/material'
import { FC } from 'react'
import { RegenerateSummaryProps } from '../../interfaceTypes'
import { CustomModal } from '../common/CustomModal'

export const RegenerateSummary: FC<RegenerateSummaryProps> = ({ isOpen, handleClose, regenerateSummary }) => (
  <CustomModal
    title='Regenerate Summary'
    handleClose={handleClose}
    isOpen={isOpen}
    infoIcon
    maxWidth="700px"
  >
    <Typography variant="h4" marginBottom={3} paddingLeft={0.5}>
      Are you sure you want to create another version of the summary?
    </Typography>

    <DialogActions sx={{ paddingY: '0' }}>
      <Button color="inherit" onClick={handleClose}>No</Button>

      <Button variant="contained" color="primary" onClick={regenerateSummary}>
        Yes
      </Button>
    </DialogActions>
  </CustomModal>
)
