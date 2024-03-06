import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { routes } from './routes';
const LoginBoxed = lazy(() => import('../pages/Auth/LoginBoxed'));

const isLoggedIn: boolean = JSON.parse(localStorage.getItem('isLoggedIn') || 'false');

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>,
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
