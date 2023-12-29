import SyncIcon from '@mui/icons-material/Sync';
import { Box, IconButton, Tooltip } from "@mui/material";
import { FC } from 'react';
import { useParams } from "react-router-dom";
import { StatusType, useGenerateSummaryLazyQuery } from "../../../generated";
import { GRAPHQL_QUERY_POLICY } from '../../constants';
import { GenerateSummaryProps } from '../../interfaceTypes';
import { Alert } from "../common/Alert";
import { RegenerateSummary } from './ RegenerateSummary';
import { SummaryDetailsActionType } from './SummaryDetailReducer';

export const GenerateSummary: FC<GenerateSummaryProps> = ({ state, dispatch }) => {
  const { regenerateConfirmation } = state;
  const { fileStatus } = state
  const params = useParams();
  const { id } = params;

  const [regenerateSummary] = useGenerateSummaryLazyQuery({
    ...GRAPHQL_QUERY_POLICY,
    variables: undefined,

    onCompleted() {
      Alert.success("Summary Generation is in progress. You will be notified through email once its done")
      handleCloseRegenerate()
      dispatch({ type: SummaryDetailsActionType.SET_FILE_STATUS, fileStatus: StatusType.Active })
    },

    onError({ message }) {
      Alert.error(message)
    }
  })

  const handleCloseRegenerate = () => {
    dispatch({ type: SummaryDetailsActionType.SET_REGENERATE_CONFIRMATION, regenerateConfirmation: false })
  }

  const handleOpenRegenerate = () => {
    dispatch({ type: SummaryDetailsActionType.SET_REGENERATE_CONFIRMATION, regenerateConfirmation: true })
  }

  const handleSummaryReGenerate = async () => {
    if (id) {
      await regenerateSummary({
        variables: {
          typeId: id
        }
      })
    }
  }

  return (
    <>
      <Tooltip title={fileStatus === StatusType.Completed || StatusType.Failed ? 'Click to regenerate summary' : 'Summary generation is in progress'}>
        <Box>
          <IconButton
            disabled={fileStatus === StatusType.Active}
            onClick={fileStatus === StatusType.Completed || StatusType.Failed ? handleOpenRegenerate : undefined} color='primary'
          >
            <SyncIcon />
          </IconButton>
        </Box>
      </Tooltip>

      <RegenerateSummary
        regenerateSummary={handleSummaryReGenerate}
        isOpen={regenerateConfirmation}
        handleClose={handleCloseRegenerate}
      />
    </>
  )
}