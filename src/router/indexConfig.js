import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/spinner2';

export default [
    {
        name: '404',
        path: '/page404',
        component: Loadable({
            loader: () => import('../pages/404'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '注册',
        path: '/register',
        component: Loadable({
            loader: () => import('../pages/register'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '忘记密码',
        path: '/forget',
        component: Loadable({
            loader: () => import('../pages/forgetPassword'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '首页',
        path: '/home',
        component: Loadable({
            loader: () => import('../pages/home'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '彩票',
        path: '/lottery',
        component: Loadable({
            loader: () => import('../pages/lottery'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '体育',
        path: '/sports',
        component: Loadable({
            loader: () => import('../pages/sports'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '真人',
        path: '/live',
        component: Loadable({
            loader: () => import('../pages/live'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '电子游戏',
        path: '/slots',
        component: Loadable({
            loader: () => import('../pages/slots'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '电子竞技',
        path: '/esports',
        component: Loadable({
            loader: () => import('../pages/esports'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '常见问题',
        path: '/helpercenter',
        component: Loadable({
            loader: () => import('../pages/faq'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    },
    {
        name: '个人中心',
        path: '/userCenter',
        component: Loadable({
            loader: () => import('../pages/userCenter'),
            loading: () => <Loading global={true} />
        }),
        exact: true
    }
];