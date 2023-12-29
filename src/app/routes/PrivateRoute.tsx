import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../utils";
import { useEffect } from "react";
import { SUMMARY_DETAIL } from "../constants";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const pathName = location.pathname
  const isSummaryDetail = pathName.includes('view-document')

  useEffect(() => {
    isSummaryDetail && localStorage.setItem(SUMMARY_DETAIL, pathName)
    // eslint-disable-next-line
  }, [pathName])

  if (!getToken()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}