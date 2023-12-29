import { User } from "../../generated";

export interface AuthState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  isAttorney: boolean;
  isClient: boolean;
  isParalegal: boolean;
  userLoader: boolean;
  currentUser: User | null;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  isAdmin: false,
  isAttorney: false,
  isClient: false,
  isParalegal: false,
  userLoader: false,
  currentUser: null,
}

export enum AuthActionType {
  SET_IS_LOGGED_IN = 'setIsLoggedIn',
  SET_IS_ADMIN = 'setIsAdmin',
  SET_IS_ATTORNEY = 'setIsAttorney',
  SET_IS_CLIENT = 'setIsClient',
  SET_IS_PARALEGAL = 'setIsParalegal',
  SET_USER_LOADER = 'setUserLoader',
  SET_CURRENT_USER = 'setCurrentUser',
}

export type AuthAction =
  | { type: AuthActionType.SET_IS_LOGGED_IN, isLoggedIn: boolean }
  | { type: AuthActionType.SET_IS_ADMIN, isAdmin: boolean }
  | { type: AuthActionType.SET_IS_ATTORNEY, isAttorney: boolean }
  | { type: AuthActionType.SET_IS_CLIENT, isClient: boolean }
  | { type: AuthActionType.SET_IS_PARALEGAL, isParalegal: boolean }
  | { type: AuthActionType.SET_USER_LOADER, userLoader: boolean }
  | { type: AuthActionType.SET_CURRENT_USER, currentUser: User | null }


export const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }

    case AuthActionType.SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.isAdmin
      }

    case AuthActionType.SET_IS_ATTORNEY:
      return {
        ...state,
        isAttorney: action.isAttorney
      }

    case AuthActionType.SET_IS_CLIENT:
      return {
        ...state,
        isClient: action.isClient
      }

    case AuthActionType.SET_IS_PARALEGAL:
      return {
        ...state,
        isParalegal: action.isParalegal
      }

    case AuthActionType.SET_USER_LOADER:
      return {
        ...state,
        userLoader: action.userLoader
      }

    case AuthActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }
  }
}
