/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Button, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { CheckIcon } from '../../../assets/svgs';
import { INVITE_SENT } from '../../constants';
import { CustomModal } from '../common/CustomModal';
import palette from '../../theme/palette';
import { AppContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import { UsersInvitationModelProps } from '../../interfaceTypes';

export const UsersInvitationSuccessModal: FC<UsersInvitationModelProps> = ({ email }) => {
  const { isInviteSuccess, dispatch } = useContext(AppContext);

  const handleClose = () => {
    dispatch({ type: ActionType.SET_IS_INVITE_SUCCESS, isInviteSuccess: false })
  }

  const { grayTwo } = palette

  return (
    <CustomModal maxWidth='500px' isOpen={isInviteSuccess}
      title={''}
    >
      <Box mt='1.75rem' textAlign="center" p="10px">
        <CheckIcon />

        <Typography variant='h2' mt="24px">{INVITE_SENT}</Typography>

        <Box maxWidth={352} mx={'auto'} my="24px">
          <Typography variant='subtitle2' sx={{ color: grayTwo }}>
            invitation is successfully sent to {email}
          </Typography>
        </Box>

        <Button fullWidth variant='outlined' color='secondary' sx={{ borderRadius: '8px' }} onClick={handleClose}>Close</Button>
      </Box>
    </CustomModal>
  )
}
