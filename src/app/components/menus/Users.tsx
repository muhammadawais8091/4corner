import { Box, IconButton } from '@mui/material';
import { FC, useState } from 'react';

import { EditIcon, TrashIcon } from '../../../assets/svgs';
import { UserProps } from '../../interfaceTypes';
import { UserRemove } from '../users/UserRemove';
import { UserUpdate } from '../users/UserUpdate';

export const Users: FC<UserProps> = ({ currentUserData, dispatch, usersData, refetch }) => {
  const [removeUser, setRemoveUser] = useState(false);
  const [editUser, setEditUser] = useState<boolean>(false);
  
  const handleEditUserOpen = () => {
    setEditUser(true)
   
  };

  const handleRemoveClickOpen = () => {
    setRemoveUser(true);
  };

  return (
    <Box>
      <Box display='flex' gap="10px">
        <IconButton onClick={handleRemoveClickOpen}>
          <TrashIcon />
        </IconButton>

        <IconButton onClick={handleEditUserOpen}>
          <EditIcon />
        </IconButton>
      </Box>
  
      <UserUpdate currentUserData={currentUserData} usersData={usersData} editUser={editUser} setEditUser={setEditUser} dispatch={dispatch} />

      <UserRemove
        refetch={refetch}
        currentUserData={currentUserData}
        usersData={usersData}
        dispatch={dispatch}
        removeUser={removeUser}
        setRemoveUser={setRemoveUser}
      />
    </Box>
  )
}
