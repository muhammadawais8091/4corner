// packages import
import { Box, Chip, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import { FC, Reducer, useContext, useEffect, useReducer } from 'react';
// other import
import { UserRoles, UserStatus, useFetchAllUsersLazyQuery } from '../../../generated';
import { DATE_FORMAT, GRAPHQL_QUERY_POLICY, NOT_FOUND_EXCEPTION } from '../../constants';
import { AppContext, AuthContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import { UserAction, UserActionType, UserState, userInitialState, userReducer } from '../../context/UserContextReducer';
import palette from '../../theme/palette';
import { getChipColor } from '../../theme/styleConstants';
import { firstLetterUppercase, getUserRoles } from '../../utils';
import { CustomEntity } from '../common/CustomEntity';
import { CustomPagination } from '../common/CustomPagination';
import { NoDataFound } from '../common/NoDataFound';
import { StickyTable } from '../common/StickyTable';
import { Users } from '../menus/Users';
import { UsersSkeleton } from '../skeletons/UsersSkeleton';
import { UsersActions } from './UsersActions';
import { Alert } from '../common/Alert';

export const UserListing: FC = () => {
  const { pageLimit, currentPage, dispatch } = useContext(AppContext);
  const { isAdmin } = useContext(AuthContext)
  const [userState, userDispatch] = useReducer<Reducer<UserState, UserAction>>(userReducer, userInitialState);
  const { usersData, userRole, keyword } = userState;
  const userRoles = getUserRoles(userRole || '');

  const [getAllUsers, { loading, refetch }] = useFetchAllUsersLazyQuery({
    ...GRAPHQL_QUERY_POLICY,
    variables: undefined,

    onError({ message }) {
      userDispatch({ type: UserActionType.SET_USERS_DATA, usersData: [] });
      dispatch({ type: ActionType.SET_TOTAL_PAGE_COUNT, totalPageCount: 0 });
      if (message === NOT_FOUND_EXCEPTION) return;
      Alert.error(message);
    },

    onCompleted(data) {
      const { fetchAllUsers } = data;

      if (fetchAllUsers) {
        const { users, pagination } = fetchAllUsers;

        if (users) {
          userDispatch({ type: UserActionType.SET_USERS_DATA, usersData: users });
        }

        if (pagination) {
          const { totalPages } = pagination;

          dispatch({ type: ActionType.SET_TOTAL_PAGE_COUNT, totalPageCount: totalPages || 0 });
        }
      }
    }
  });

  useEffect(() => {
    getAllUsers({
      variables: {
        fetchUsersInput: {
          keyword: keyword && keyword.length > 2 ? keyword : undefined,
          roleType: userRoles || [UserRoles.Admin],

          paginationOptions: {
            page: currentPage,
            limit: pageLimit
          }
        }
      }
    });
    // eslint-disable-next-line
  }, [userRole, keyword, currentPage]);

  const isEmpty = usersData?.length === 0 && !loading;

  const { blackTwo } = palette;

  return (
    <>
      <CustomEntity customEntityText="Members" customEntityCount={usersData?.length as number} />

      {isAdmin && <Box pt="16px">
        <UsersActions btnActionText="+ Add New Member" dispatch={userDispatch} refetch={refetch} state={userState} loading={loading} />
      </Box>}

      <Box pt="30px">
        {isEmpty ? (
          <NoDataFound height="calc(100vh - 285px)" description="Record not found" />
        ) : (
          <StickyTable pagination={<CustomPagination loading={loading} />}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: '400px' }}>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Added</TableCell>
                <TableCell colSpan={3}>Actions</TableCell>
              </TableRow>
            </TableHead>

            {loading ? (
              <UsersSkeleton noOfRows={10} />
            ) : (
              <TableBody>
                {usersData?.map((user) => {
                  const { id, fullName, email, createdAt, roles, status } = user || {};
                  const createdDate = moment(createdAt).format(DATE_FORMAT);

                  const userRoles = roles?.map((userRole) => {
                    const role = userRole?.role.split('_').join(' ');
                    return firstLetterUppercase(role || '');
                  });

                  return (
                    <TableRow key={id} hover>
                      <TableCell>
                        <Box maxWidth="250px">
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt={fullName || ''} src="/static/images/avatar/1.jpg" />

                            <Box pl="10px">
                              <Tooltip title={fullName} placement="top-start">
                                <Typography variant="body2" color="inherit" noWrap>
                                  {fullName}
                                </Typography>
                              </Tooltip>

                              <Typography variant="h3" sx={{ fontWeight: '500', color: blackTwo, mt: '10px' }}>
                                {email}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                          {userRoles?.map((role) => (
                            <Chip key={role} sx={getChipColor(role)} label={role} variant="outlined" />
                          ))}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Chip label={firstLetterUppercase(status || '')} color={status === UserStatus.Active ? 'success' : 'error'} variant="outlined" />
                      </TableCell>

                      <TableCell>
                        <Typography variant="h3" sx={{ fontWeight: '500', color: blackTwo }}>
                          {createdDate}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Users currentUserData={user} usersData={usersData} state={userState} dispatch={userDispatch} refetch={refetch} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </StickyTable>
        )}
      </Box>
    </>
  );
};
