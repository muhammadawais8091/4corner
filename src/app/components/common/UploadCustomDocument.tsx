import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import { FC, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DocumentIcon } from '../../../assets/svgs';
import { UserStatus } from '../../../generated';
import { AUTH_TOKEN, SOMETHING_WENT_WRONG } from '../../constants';
import { AppContext, AuthContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import { AuthActionType } from '../../context/AuthContextReducer';
import { UploadCustomDocumentProps } from '../../interfaceTypes';
import { UploadArea, UploadBox, UploadIcon } from '../../theme/styleComponents';
import { Alert } from './Alert';

export const UploadCustomDocument: FC<UploadCustomDocumentProps> = ({ accept, type, typeId, metaType, fieldName, fileId, fileKey }) => {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState<boolean>(false)
  const token = localStorage.getItem(AUTH_TOKEN);
  const { dispatch } = useContext(AppContext)
  const { dispatch: authDispatch, currentUser } = useContext(AuthContext)

  const onDrop = async (acceptedFiles: File[]) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));

    const formData = new FormData();
    if (acceptedFiles.length !== 0) {
      fileId && formData.append("id", fileId);
      fileKey && formData.append("fileKey", fileKey);
      typeId && formData.append('typeId', typeId);
      formData.append("file", acceptedFiles[0]);
      formData.append('type', type);
      formData.append('metaType', metaType);

      try {
        setUploading(true);
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/users/avatar`,
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        )

        const { data, status } = response

        if (status === 201 && data) {
          Alert.success('File uploaded successfully');

          if (data.type === 'user') {
            const updateUser = {
              ...currentUser,
              id: currentUser?.id || "",
              email: currentUser?.email || "",
              fullName: currentUser?.fullName || "",
              emailVerified: currentUser?.emailVerified || false,
              createdAt: currentUser?.createdAt,
              updatedAt: currentUser?.updatedAt,
              status: currentUser?.status || UserStatus.Active,
              profilePicture: data
            }

            authDispatch({ type: AuthActionType.SET_CURRENT_USER, currentUser: updateUser })
          }
          setFiles([])
          setUploading(false)

          dispatch({ type: ActionType.SET_IS_OPEN, isOpen: false })
        }
      }

      catch (error) {
        Alert.error(SOMETHING_WENT_WRONG);
      }
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop,
    accept,
    multiple: false
  });

  return (
    <>
      {!uploading &&
        <Box width='100%'>
          <UploadArea>
            <Box {...getRootProps()}>
              <input name={fieldName} {...getInputProps()} />

              <UploadBox>
                <UploadIcon>
                  <UploadFileIcon color="primary" />
                </UploadIcon>

                <Typography sx={{ marginBottom: '.5rem' }} variant="h4"><Typography component='span' color='primary'>Click to upload </Typography>or drag and drop</Typography>
              </UploadBox>
            </Box>
          </UploadArea>
        </Box>
      }

      {uploading &&
        <Box mb='20px'>
          {files.map((file, index) => {
            const { name } = file || {}

            return (
              <Box key={`${index}-${typeId}`} borderRadius='4px' padding="12px 16px" display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                <Box display="flex" alignItems="center">
                  <IconButton className="MuiIconButton-document">
                    <DocumentIcon />
                  </IconButton>
                  <Box paddingLeft={2}>
                    <Typography variant="body1" fontSize="16px" letterSpacing="0.17px">{name}</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Box marginRight={2} marginTop="5px">
                    <CircularProgress size={35} />
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      }
    </>
  )
}
