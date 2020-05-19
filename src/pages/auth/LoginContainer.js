import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import { logIn } from 'modules/auth';
import { withRouter } from "react-router-dom";

function LoginContainer(props) {
    const { loginResult } = useSelector(state => ({
        loginResult: state.auth.loginResult
    }));

    const dispatch = useDispatch();
    const onLogIn = () => {
        dispatch(logIn());
        props.history.push('/main');
    }

    return (
        <Login
            onClickLoginButton={onLogIn}
            loginResult={loginResult}
        />
    )
}

export default withRouter(LoginContainer);