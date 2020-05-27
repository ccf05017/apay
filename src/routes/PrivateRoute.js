import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

    return (
        <Route {...rest} render={() => {
            if (isAuthenticated) {
                return <Component />;
            }

            return <>Not Authenticated</>;
        }}
        />
    );
}

export default PrivateRoute;