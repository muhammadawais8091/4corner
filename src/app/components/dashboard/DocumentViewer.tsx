import { FC } from "react";
import { DocumentViewerProps } from "../../interfaceTypes";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const DocumentViewer: FC<DocumentViewerProps> = ({ url, title, handleClose, fileType }) => (
  <Box mt="10px" display='flex' flexDirection="column" sx={{ height: '100%', '#proxy-renderer': { overflow: 'hidden', borderRadius: '5px' } }}>
    <Box display="flex" pb="12px" alignItems="center">
      <Box flex={1}>
        <Typography variant="h5">{title}</Typography>
      </Box>

      <Box>
        <Button startIcon={<FileDownloadIcon />} component='a' href={url} target="_download">
          Download File
        </Button>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>

    <Box flex={1}>
      <DocViewer
        style={{ borderRadius: '5px' }}
        pluginRenderers={DocViewerRenderers}
        documents={[
          { uri: url, fileType }
        ]}
        config={{
          header: {
            disableHeader: true,
          },
        }}
      />
    </Box>
  </Box>
)