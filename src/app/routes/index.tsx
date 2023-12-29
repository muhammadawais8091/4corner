// packages import
import { FC, Suspense, useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// pages
import { Layout } from '../components/layout';
import { ForgotPassword } from '../pages/auth/ForgotPassword';
import { SetPassword } from '../pages/auth/SetPassword';
import { SignUp } from '../pages/auth/SignUp';
import { VerifyEmail } from '../pages/auth/VerifyEmail';
import { Profile } from '../pages/main/Profile';
import { Users } from '../pages/main/Users';
import { PrivateRoute } from './PrivateRoute';
// other packages
import { CircularProgress } from '@mui/material';
import { AUTH_LINKS, ROOT_ROUTE } from '../constants';
import { AuthContext } from '../context';
import { PageNotFound } from '../pages/main/PageNotFound';
import { getToken } from '../utils';
import { Login } from '../pages/auth/login';
import { CheckEmail } from '../pages/auth/CheckEmail';
import { Dashboard } from '../pages/main/Dashboard';
import { UploadFiles } from '../pages/main/UploadFiles';
import { SummaryDetail } from '../components/summaryDetail';

export const MainRoutes: FC = (): JSX.Element => {
  const { isAdmin, isClient, isLoggedIn, userLoader, isAttorney } = useContext(AuthContext);

  return (
    <BrowserRouter basename="/portal">
      <Routes>
        {!getToken() && !isLoggedIn && <Route path={ROOT_ROUTE} element={<Navigate replace to={AUTH_LINKS.LOGIN_LINK} />} />}
        <Route path={AUTH_LINKS.LOGIN_LINK} element={<Login />} />
        <Route path={AUTH_LINKS.SIGN_UP_LINK} element={<SignUp />} />
        <Route path={AUTH_LINKS.SET_PASSWORD} element={<SetPassword />} />
        <Route path={AUTH_LINKS.FORGET_PASSWORD_LINK} element={<ForgotPassword />} />
        <Route path={AUTH_LINKS.VERIFY_EMAIL} element={<VerifyEmail />} />
        <Route path={AUTH_LINKS.CHECK_EMAIL} element={<CheckEmail />} />

        <Route element={<Layout />}>
          <Route
            path={ROOT_ROUTE}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/upload-document"
            element={
              <PrivateRoute>
                <UploadFiles />
              </PrivateRoute>
            }
          />

          <Route
            path="/view-document/:id"
            element={
              <PrivateRoute>
                <SummaryDetail />
              </PrivateRoute>
            }
          />

          {(!isLoggedIn || (!userLoader && (isAdmin || isClient || isAttorney))) && (
            <Route
              path="*"
              element={
                <Suspense fallback={<CircularProgress />}>
                  <PageNotFound />
                </Suspense>
              }
            />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
