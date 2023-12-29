import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Button } from '@mui/material'
import { FC, useState } from 'react'
import { MetaType } from '../../../generated'
import { CANCEL } from '../../constants'
import { UpdateSummaryFileInterface } from '../../interfaceTypes'
import { uploadFiles } from '../../rest/files'
import { Alert } from '../common/Alert'
import { CustomModal } from '../common/CustomModal'
import { UploadDocumentFile } from '../common/UploadDocumentFile'
import { SummaryDetailsActionType } from './SummaryDetailReducer'

export const UpdateSummaryFile: FC<UpdateSummaryFileInterface> = ({ state, dispatch }) => {
  const [fileError, setFileError] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isEditFile, currentJobSummary, inputSummaryFile} = state
  const { id, files: summaryFiles } = currentJobSummary ?? {}
  const inputFile = summaryFiles?.filter(file => file.metaType === MetaType.InputFile)[0]

  const handleClose = () => {
    dispatch({ type: SummaryDetailsActionType.SET_IS_EDIT_FILE, isEditFile: false })
  }

  const handleFileUpload = async () => {
    setIsLoading(true);
    const resultStatus = id && (await uploadFiles({ fileId: inputFile?.id || undefined, jobSummaryId: id, files, status: 'active' }));
    if (resultStatus) {
      const { data } = resultStatus ?? {}

      dispatch({ type: SummaryDetailsActionType.SET_INPUT_SUMMARY_FILE, inputSummaryFile: { ...inputSummaryFile, ...data[0] } });
      setIsLoading(false);
      setFileError(false);
      handleClose();
      dispatch({ type: SummaryDetailsActionType.SET_REGENERATE_CONFIRMATION, regenerateConfirmation: true })
    } else {
      setFileError(true)
      setIsLoading(false);
      setFiles([])
      Alert.error('Something went wrong while creating the case summary and uploading documents!')
    }
  }

  return (
    <CustomModal maxWidth='800px' title='Upload File' isOpen={isEditFile} handleClose={handleClose}>
      <Box pt={1} pb={1}>
        <UploadDocumentFile files={files} setFiles={setFiles} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mt={2}>
          <Button onClick={handleClose}>
            {CANCEL}
          </Button>

          <LoadingButton type="submit" onClick={handleFileUpload} variant="contained" loading={isLoading} disabled={files.length === 0 && fileError}>
            Upload File
          </LoadingButton>
        </Box>
      </Box>
    </CustomModal>
  )
}
