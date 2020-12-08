/*
 * @Author: your name
 * @Date: 2020-11-10 11:40:03
 * @LastEditTime: 2020-11-11 18:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\router\userCenterConfig.js
 */
import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/spinner2';

export default [
    {
        name: '充值',
        path: '/userCenter/deposit',
        component: Loadable({
            loader: () => import('../pages/userCenter/deposit'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '转账',
        path: '/userCenter/transfer',
        component: Loadable({
            loader: () => import('../pages/userCenter/transfer'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '提款',
        path: '/userCenter/withdrawal',
        component: Loadable({
            loader: () => import('../pages/userCenter/withdrawal'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '个人资料',
        path: '/userCenter/info',
        component: Loadable({
            loader: () => import('../pages/userCenter/info'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '绑卡管理',
        path: '/userCenter/wdMethod/:type',
        component: Loadable({
            loader: () => import('../pages/userCenter/wdMethod'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '交易记录',
        path: '/userCenter/transactions',
        component: Loadable({
            loader: () => import('../pages/userCenter/transactions'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '游戏记录',
        path: '/userCenter/gameRecords',
        component: Loadable({
            loader: () => import('../pages/userCenter/gameRecords'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    },
    {
        name: '消息记录',
        path: '/userCenter/messages',
        component: Loadable({
            loader: () => import('../pages/userCenter/messages'),
            loading: () => <Loading height={858} />
        }),
        exact: true
    }
];