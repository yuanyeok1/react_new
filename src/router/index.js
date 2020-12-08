import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

import Config from './indexConfig';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <Redirect to="/home" />
            </Route>

            {
                Config.map(item => {
                    return (
                        <Route 
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            {...item.attrs}
                        />
                    )
                })
            }

            <Route path="*">
                <Redirect to="/page404" />
            </Route>
        </Switch>
    )
};

const IndexRouter = () => {
    const location = useLocation();
    const noHead = /(^\/$)|(^\/(page404|chart)\/{0,1})/;
    // console.log(location);
    return (
        <React.Fragment>
            {!noHead.test(location.pathname) ? <Header /> : null}
            <Routes />
            {!noHead.test(location.pathname) ? <Footer /> : null}
        </React.Fragment>
    )
};

export default IndexRouter;
