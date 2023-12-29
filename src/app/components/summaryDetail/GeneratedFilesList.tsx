import { Box, Typography, Skeleton } from '@mui/material';
import moment from 'moment';
import React, { FC } from 'react'
import { MSWordSvg } from '../../../assets/svgs';
import { DATE_FORMAT, TIME_FORMAT } from '../../constants';
import { wordPreviewBox } from '../../theme/styleConstants';
import { formatFileSize } from '../../utils';
import { NoDataFound } from '../common/NoDataFound';
import { GeneratedFilesListInterface } from '../../interfaceTypes';

export const GeneratedFilesList: FC<GeneratedFilesListInterface> = ({ summaryLoader, state, clickFileHandler }) => {
  const { outputSummaryFiles } = state

  return (
    <Box sx={{ mt: '20px', borderRadius: '3px' }}>
      <Box maxWidth="250px" margin="0 auto">
        {outputSummaryFiles.length ? (
          outputSummaryFiles.map((file, index) => {
            const { fileSize, title, createdAt } = file;
            const createdDate = moment(createdAt).format(DATE_FORMAT);
            const createdTime = moment(createdAt).format(TIME_FORMAT);

            return (
              <Box onClick={() => clickFileHandler(file, outputSummaryFiles.length - index)} sx={wordPreviewBox} key={index}>
                <Box component="img" sx={{ width: '150px', display: 'block', margin: '0 auto 10px' }} src={MSWordSvg} alt={title || ''} />

                <Typography noWrap variant='h2' mb="5px">
                  Summary v{outputSummaryFiles.length - index}
                </Typography>

                <Typography>
                  {formatFileSize(fileSize)}
                </Typography>

                <Box mt="5px">
                  <Typography fontSize="14px">
                    {createdDate} {createdTime}
                  </Typography>
                </Box>
              </Box>
            )
          })
        ) : (
          !summaryLoader ? <Box border='1px solid #E4E7EC' borderRadius='5px'>
            <NoDataFound height="calc(100vh - 496px)" description='No File Found' />
          </Box>
            :
            <Box sx={{ borderRadius: '8px' }}>
              <Skeleton variant="text" width={250} height={400} />
            </Box>
        )}
      </Box>
    </Box>
  )
}