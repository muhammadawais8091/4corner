// packages block
import { createContext, FC, Reducer, useLayoutEffect, useMemo, useReducer } from "react";
import { useGetUserLazyQuery, UserRoles } from "../../generated";
import { AppLoader } from "../components/common/AppLoader";
import { AUTH_TOKEN, GRAPHQL_QUERY_POLICY, USER_EMAIL } from "../constants";
// graphql, interfaces/types and constants block
import { AuthContextReducerType, ChildrenType } from "../interfaceTypes";
import { AuthAction, AuthActionType, AuthState, initialState, reducer } from "./AuthContextReducer";

export const AuthContext = createContext<AuthContextReducerType>({
  ...initialState,

  dispatch: () => {
    return;
  },
});

export const AuthContextProvider: FC<ChildrenType> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(reducer, initialState);
  const store = useMemo(() => ({ ...state, dispatch }), [state]);
  const { isLoggedIn, currentUser, userLoader } = state

  const [fetchUser] = useGetUserLazyQuery({
    ...GRAPHQL_QUERY_POLICY,
    variables: undefined,

    onError() {
      dispatch({ type: AuthActionType.SET_CURRENT_USER, currentUser: null })
      dispatch({ type: AuthActionType.SET_USER_LOADER, userLoader: false })
    },

    onCompleted(data) {
      if (data) {
        const { me } = data;

        if (me) {
          dispatch({ type: AuthActionType.SET_CURRENT_USER, currentUser: me })

          const { email } = me;
          localStorage.setItem(USER_EMAIL, email || "");
        }
      }
    }
  });

  const hasToken = localStorage.getItem(AUTH_TOKEN);

  useLayoutEffect(() => {
    dispatch({ type: AuthActionType.SET_IS_LOGGED_IN, isLoggedIn: !!hasToken })

    if (isLoggedIn && hasToken && !currentUser) {
      dispatch({ type: AuthActionType.SET_USER_LOADER, userLoader: true })
      fetchUser()
    }

    if (currentUser) {
      const { roles } = currentUser || {}
      const admin = roles?.filter(item => item?.role === UserRoles.Admin || item?.role === UserRoles.SuperAdmin)
      const attorney = roles?.filter(item => item?.role === UserRoles.Attorney)
      const paralegal = roles?.filter(item => item?.role === UserRoles.Paralegal)
      const client = roles?.filter(item => item?.role === UserRoles.Client)

      dispatch({ type: AuthActionType.SET_IS_CLIENT, isClient: client?.length !== 0 })
      dispatch({ type: AuthActionType.SET_IS_ADMIN, isAdmin: admin?.length !== 0 })
      dispatch({ type: AuthActionType.SET_IS_ATTORNEY, isAttorney: attorney?.length !== 0 })
      dispatch({ type: AuthActionType.SET_IS_PARALEGAL, isParalegal: paralegal?.length !== 0 })
      dispatch({ type: AuthActionType.SET_USER_LOADER, userLoader: false })
    }
  }, [isLoggedIn, hasToken, currentUser, fetchUser]);

  if (userLoader) return <AppLoader />

  return (
    <AuthContext.Provider value={{ ...store }}>
      {children}
    </AuthContext.Provider>
  )
}