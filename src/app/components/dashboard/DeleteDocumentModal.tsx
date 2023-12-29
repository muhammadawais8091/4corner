import { Button, CircularProgress, DialogActions, Typography } from "@mui/material"
import { FC, useContext } from "react"
import { JobSummary, useRemoveJobSummaryMutation } from "../../../generated"
import { FORBIDDEN_EXCEPTION, REMOVE_DOCUMENT_SUCCESSFULLY, SOMETHING_WENT_WRONG } from "../../constants"
import { AppContext } from "../../context"
import { ActionType } from "../../context/AppContextReducer"
import { DeleteDocumentProps } from "../../interfaceTypes"
import palette from "../../theme/palette"
import { RemoveButton } from "../../theme/styleComponents"
import { firstLetterUppercase } from "../../utils"
import { Alert } from "../common/Alert"
import { CustomModal } from "../common/CustomModal"

export const DeleteDocumentModal: FC<DeleteDocumentProps> = ({ jobSummary, refetch }) => {
  const { isDeleteOpen, dispatch } = useContext(AppContext);

  const [deleteJobSummary, { loading }] = useRemoveJobSummaryMutation({
    onError({ message }) {
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION) {
        return Alert.error(SOMETHING_WENT_WRONG);
      }

      return Alert.error(firstLetterUppercase(message || ''));
    },

    onCompleted(data) {
      if (data) {
        refetch()
      }
      return Alert.success(REMOVE_DOCUMENT_SUCCESSFULLY);
    }
  });

  const handleClose = () => {
    dispatch({ type: ActionType.SET_IS_DELETE_OPEN, isDeleteOpen: false })
  }

  const handleDeleteFile = async (jobSummary?: JobSummary) => {
    if (jobSummary?.id) {
      await deleteJobSummary({
        variables: {
          removeJobSummaryId: jobSummary.id
        }
      });
      dispatch({ type: ActionType.SET_IS_DELETE_OPEN, isDeleteOpen: false })
    };
  }

  return (
    <CustomModal title='Remove Document ' isOpen={isDeleteOpen} handleClose={handleClose} infoIcon maxWidth='700px'>
      <Typography variant="h4" marginBottom={3} paddingLeft={0.5}>Are you sure you want to delete this document?</Typography>
      <DialogActions sx={{ paddingY: '0' }}>
        <Button sx={{ border: `1px solid ${palette.light}` }} color="inherit" onClick={handleClose}>Close</Button>

        <RemoveButton onClick={() => handleDeleteFile(jobSummary)} variant="contained" color="error" disabled={loading}
          endIcon={loading && <CircularProgress size={20} color="inherit" />}
        >
          Remove Document
        </RemoveButton>
      </DialogActions>
    </CustomModal>
  )
}