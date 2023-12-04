import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/services';
import * as ROUTES from 'constants/routes.js';
import RestrictedRoute from './RestrictedRoutes';
import PrivateRoute from './PrivateRoute';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Register = lazy(() => import('pages/RegisterPage/RegisterPage'));
const Contacts = lazy(() => import('pages/ContactsPage/ContactsPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <SharedLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
};
