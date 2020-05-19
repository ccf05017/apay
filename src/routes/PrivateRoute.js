import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ loginResult, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => {
                if (loginResult) {
                    return <Component />;
                }

                return <>Not Authenticated</>;
            }}
        />
    );
}

export default PrivateRoute;