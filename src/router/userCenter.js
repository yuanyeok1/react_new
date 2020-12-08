import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Config from './userCenterConfig';
import PrivateRoute from './privateRoute';

const UserCenterRouter = () => {
    return (
        <Switch>
            {
                Config.map(item => {
                    const Child = item.component;

                    return (
                        <PrivateRoute 
                            key={item.path}
                            path={item.path}
                            // component={item.component}   //在这里写component, 传到PrivateRoute, 会与Route的render函数共存，react-router会警告！
                            {...item.attrs}
                        >
                            <Child />
                        </PrivateRoute>
                    )
                })
            }

            <PrivateRoute path="/userCenter">
                <Redirect to="/userCenter/deposit" />
            </PrivateRoute>
        </Switch>
    )
};

export default UserCenterRouter;
