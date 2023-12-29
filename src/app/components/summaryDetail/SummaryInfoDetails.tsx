import PersonIcon from '@mui/icons-material/Person';
import { Box, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { TemplateType } from '../../../generated';
import { SummaryInfoDetailsInterface } from '../../interfaceTypes';
import palette from '../../theme/palette';
import { formatEnumMember, getFullName, getTemplateUrl } from '../../utils';
import { CustomModal } from '../common/CustomModal';
import { DocumentViewer } from '../dashboard/DocumentViewer';
import { CaseInformationSkeleton } from '../skeletons/CaseInformationSkeleton';
import { GenerateSummary } from './GenerateSummary';

export const SummaryInfoDetails: FC<SummaryInfoDetailsInterface> = ({ summaryLoader, state, dispatch }) => {
  const { primary: { main } } = palette;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentJobSummary } = state
  const { deponentsFirstName, deponentsLastName, caseName, templateTypes, caseNumber, confidentialValue, deponentsGender, volumeNumber, users, deponentsTitle } = currentJobSummary ?? {}
  const fullName = getFullName(deponentsFirstName || "", deponentsLastName || "");
  const { fullName: userFullName } = users?.[0] ?? {}

  const showPreview = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Box pt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize="26px" fontWeight="700px">
          Case Information
        </Typography>

        <GenerateSummary state={state} dispatch={dispatch} />
      </Box>

      {!summaryLoader ?
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Created By</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px' }} variant='h4'>
                  {userFullName}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Deponent's Name</Typography>

              <Box display='flex' alignItems='center' alignContent='center' mt='5px'>
                <Box color={main}>
                  <PersonIcon color='inherit' />
                </Box>

                <Typography variant='h4' ml='5px'>
                  {fullName}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Deponent's Title</Typography>

              <Typography variant='h4'>
                {deponentsTitle}
              </Typography>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Deponent's Gender</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px' }} variant='h4'>
                  {deponentsGender}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Level of Confidentiality</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px' }} variant='h4'>
                  {confidentialValue ? formatEnumMember(confidentialValue) : "N/A"}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Case Name</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px' }} variant='h4'>
                  {caseName}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Case Number</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px' }} variant='h4'>
                  {caseNumber}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Volume Number</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px' }} variant='h4'>
                  {volumeNumber}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant='body2' textTransform="capitalize" mt='10px'>Selected Template</Typography>

              <Box display='flex' alignItems='center'>
                <Typography sx={{ marginY: '10px', cursor: 'pointer', color: '#3498DB' }} variant='h4' onClick={showPreview}>
                  {formatEnumMember(templateTypes || "")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        :
        <CaseInformationSkeleton />
      }

      <CustomModal maxWidth='1200px' isOpen={isOpen} handleClose={handleClose}>
        <Box sx={{ height: 'calc(100vh - 150px)' }}>
          <DocumentViewer
            url={getTemplateUrl(templateTypes as TemplateType)}
            title={formatEnumMember(templateTypes || "")}
            fileType='doc'
            handleClose={handleClose} />
        </Box>
      </CustomModal>
    </Box>
  )
}
