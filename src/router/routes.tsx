import { lazy } from 'react';
import { checkAuth } from '../helpers';
const Index = lazy(() => import('../pages/Index'));
const Assistants = lazy(() => import('../pages/Assistants/Index'));
const Widget = lazy(() => import('../pages/Widget'));
const Account = lazy(() => import('../pages/Account'));
const AssistantDetail = lazy(() => import('../pages/Assistants/Detail'));
const CreateAssistant = lazy(() => import('../pages/Assistants/CreateAssistant'));
const RegisterBoxed = lazy(() => import('../pages/Auth/RegisterBoxed'));
const LoginBoxed = lazy(() => import('../pages/Auth/LoginBoxed'));

const routes = [
    {
        path: '/register',
        element: <RegisterBoxed />,
        action: checkAuth,
        layout: 'blank',
    },
    {
        path: '/signin',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/assistants',
        element: <Assistants />,
        layout: 'default',
    },
    {
        path: '/assistants/create',
        element: <CreateAssistant />,
        layout: 'default',
    },
    {
        path: '/assistants/detail/:id',
        element: <AssistantDetail />,
        layout: 'default',
    },
    {
        path: '/widget',
        element: <Widget />,
        layout: 'default',
    },
    {
        path: '/account',
        element: <Account />,
        layout: 'default',
    },
];

export { routes };
