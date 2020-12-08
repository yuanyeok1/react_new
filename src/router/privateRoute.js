import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import commonStore from '@/mobx/commonStore';
import { observer } from 'mobx-react-lite';

const PrivateRoute = ({ children, ...rest }) => {
    //console.log('commonStore.isLogin = ', commonStore.isLogin);
    
    return (
        <Route {...rest} render={props => (
            commonStore.isLogin ?
                children: 
                (<Redirect to={{pathname: '/home', state: {from: props.location}}} />)
        )} />
    );
};

export default observer(PrivateRoute);
