import React, { lazy, Suspense } from 'react';
import Login from '@pages/login';
import Home from '@pages/home';
import { useRoutes, Navigate } from 'react-router-dom';

const RoutesApp = () => {
  const NotFound = lazy(() => import('@pages/notFound'));
  let routes = useRoutes([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/admin',
      element: <Home />,
    },
    {
      path: '*',
      element: <Suspense fallback={null}><NotFound /></Suspense>
    }
  ]);
  return routes;
};

export default RoutesApp;