import { createContext, FC, Reducer, useMemo, useReducer } from "react";
import { Outlet } from "react-router-dom";
import { AppContextReducerType, ChildrenType } from "../interfaceTypes";
import { Action, initialState, reducer, State } from "./AppContextReducer";

export const AppContext = createContext<AppContextReducerType>({
  ...initialState,

  dispatch: () => {
    return;
  },
});

export const AppContextProvider: FC<ChildrenType> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);
  const store = useMemo(() => ({ ...state, dispatch }), [state]);


  return (
    <AppContext.Provider value={{ ...store }}>
      {children}

      <Outlet />
    </AppContext.Provider>
  );
}