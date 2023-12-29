import { Maybe, User, UserRoles } from "../../generated";

export interface UserState {
  usersData?: Maybe<Array<Maybe<User>>>
  currentUserData?: Maybe<User>;
  userRole?: UserRoles | string;
  keyword?: string;
}

export const userInitialState: UserState = {
  usersData: [],
  currentUserData: null,
  userRole: "",
  keyword: "",
}

export enum UserActionType {
  SET_USERS_DATA = 'setUsersData',
  SET_CURRENT_USER = 'setCurrentUser',
  SET_USER_ROLES = 'setUserRoles',
  SET_KEYWORD = 'setKeyword',
}

export type UserAction =
  { type: UserActionType.SET_USERS_DATA, usersData: Maybe<Array<Maybe<User>>> }
  | { type: UserActionType.SET_CURRENT_USER, currentUserData: Maybe<User> }
  | { type: UserActionType.SET_USER_ROLES, userRole: UserRoles | string }
  | { type: UserActionType.SET_KEYWORD, keyword: string }



export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.SET_USERS_DATA:
      return {
        ...state,
        usersData: action.usersData
      }

    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUserData: action.currentUserData
      }

    case UserActionType.SET_USER_ROLES:
      return {
        ...state,
        userRole: action.userRole
      }

    case UserActionType.SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }

    default:
      return state
  }
}
