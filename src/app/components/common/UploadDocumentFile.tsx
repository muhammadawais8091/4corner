// packages
import { Box, IconButton, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
// component
import { Link } from 'react-router-dom';
import { TrashIcon, UploadDocumentSvg } from '../../../assets/svgs';
import { UploadDocumentFileProps } from '../../interfaceTypes';
import palette from '../../theme/palette';
import { formatFileSize } from '../../utils';
import { Alert } from './Alert';
import { getFileIcon } from './FileIcon';

export const UploadDocumentFile: FC<UploadDocumentFileProps> = ({ setFiles, files }) => {
  const onDrop = async (acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  };

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop: onDrop,
    accept: {
      'file/text': ['.txt'],
      'application/pdf': ['.pdf']
    },
    multiple: true
  });

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);

    setFiles(updatedFiles);
  };

  useEffect(() => {
    fileRejections.forEach(({ errors }) =>
      errors.map((messages) => {
        const { message } = messages || {};

        if (message === 'FILE') {
          return Alert.error('FILE IS LARGER');
        } else {
          return Alert.error(message);
        }
      })
    );
  }, [fileRejections]);

  const { skyBlue, grayTwo, gray700 } = palette;

  return (
    <>
      <Box width="100%">
        <Box {...getRootProps()}>
          <input name="fileName" {...getInputProps()} />

          <Box sx={{ bgcolor: skyBlue, p: '40px 38px', borderRadius: '8px', border: '1px dotted #919EAB' }}>
            <Box display="flex" alignItems="center">
              <img src={UploadDocumentSvg} alt="" />

              <Box pl="30px" flex="1">
                <Typography variant="subtitle2" fontWeight="700">
                  Select File
                </Typography>

                <Typography variant="subtitle2" mt="15px" color="secondary">
                  {' '}
                  Drop files here or click <Link to="#">browse</Link> thorough your machine
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {!!files.length && (
        <Box mt="12px" sx={{ border: '1px solid #E4E7EC', p: '16px', borderRadius: '8px' }}>
          {files.map((file, index) => {
            const { name, size } = file || {};
            return (
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box flex="1">
                  <Box display="flex">
                    {getFileIcon(name)}

                    <Box pl="10px" flex="1">
                      <Typography variant="subtitle2" sx={{ color: grayTwo }}>
                        {name}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ color: gray700, fontWeight: 500 }}>
                        {formatFileSize(size)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <IconButton onClick={() => { removeFile(index) }}>
                  <TrashIcon />
                </IconButton>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};
