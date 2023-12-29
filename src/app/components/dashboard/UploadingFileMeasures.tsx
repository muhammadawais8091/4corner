import { Typography, Box, List, ListItem } from '@mui/material'
import React from 'react'

export const UploadingFileMeasures = () => (
  <Box pb="30px">
    <Typography variant='subtitle2'>Before uploading your file, please keep the following points in mind:</Typography>

    <List sx={{ listStyleType: 'disc', border: 'none', paddingLeft: '20px' }}>
      <ListItem sx={{ display: 'list-item' }}>
        <Typography variant='h4' fontWeight="bold"> File Format:</Typography>
        Ensure that your document is saved in one of the supported formats, such as PDF or TXT, before uploading.
      </ListItem>

      <ListItem sx={{ display: 'list-item' }}>
        <Typography variant='h4' fontWeight="bold">Page Number:</Typography>
        Verify that page numbers are not placed at the beginning of the document. Also, confirm that no page numbers are missing or duplicated within the document.
      </ListItem>

      <ListItem sx={{ display: 'list-item' }}>
        <Typography variant='h4' fontWeight="bold">File Layout:</Typography>
        Refrain from using a table format for the document layout. Instead, use a standard text-based layout to maintain compatibility and readability.
      </ListItem>

      <ListItem sx={{ display: 'list-item' }}>
        <Typography variant='h4' fontWeight="bold">File Integrity:</Typography>

        Prior to uploading, check the file for corruption or damage. If possible, open and review the document to ensure its integrity. If the file is found to be corrupt, consider obtaining a clean and undamaged version before uploading.
      </ListItem>
    </List>
  </Box>
)
