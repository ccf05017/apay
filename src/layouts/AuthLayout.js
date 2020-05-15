import React from 'react';
import { Link, Route, NavLink as RRNavLink, withRouter, Switch, NavLink, Redirect } from "react-router-dom";
import authRoutes from '../routes/auth';

const AuthLayout = (props) => {
    return (
        <Switch>
            {authRoutes.map((route, key) => {
                return (
                    <Route
                        exact
                        path={route.path}
                        component={route.component}
                        key={key}
                    />
                )
            })}
        </Switch>
    );
}

export default withRouter(AuthLayout);