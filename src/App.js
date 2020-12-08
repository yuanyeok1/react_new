/*
 * @Author: your name
 * @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-11-11 21:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\App.js
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import theme from './theme';
import { Router } from "react-router-dom";
import history from './router/history';
import IndexRouter from './router';
import vi_VN from 'antd/es/locale/vi_VN';
import 'antd/dist/antd.less';
import './assets/svgsprite';
//import { ReactQueryDevtools } from 'react-query-devtools'
import LoginDialog from './components/dialogs/login';
import PayPasswordDialog from '@/components/dialogs/payPassword'
import {
    QueryCache,
    ReactQueryCacheProvider,
    ReactQueryConfigProvider,
} from 'react-query'

import dayjs from 'dayjs';
import 'dayjs/locale/vi';
dayjs.locale('vi');

const queryCache = new QueryCache();
  
const overrides = {
    queries: {
        retry: 0,
        cacheTime: 1 * 3600 * 1000
    },
    mutations: {

    }
};

function App() {
    return (
        <React.Fragment>
                <ThemeProvider theme={theme}>
                    <ReactQueryCacheProvider queryCache={queryCache}>
                        <ReactQueryConfigProvider config={overrides}>
                            <ConfigProvider locale={vi_VN}>
                                <Router history={history} forceRefresh={false}>
                                    <IndexRouter />
                                </Router>
                                <PayPasswordDialog />
                                <LoginDialog />
                            </ConfigProvider>
                        </ReactQueryConfigProvider>
                    </ReactQueryCacheProvider>
                </ThemeProvider>
            {/* <ReactQueryDevtools initialIsOpen /> */}
        </React.Fragment>
    );
}

export default App;
