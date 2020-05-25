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
    const onLogIn = (shopId, password) => {
        console.log(shopId, password)
        //TODO login api call 여기서 token 등을 받아와야 함
        let token = getToken(shopId, password);
        dispatch(logIn(shopId, password));
        props.history.push('/main');
        
    }

    const getToken = (shopId, password) => {
        if (shopId === '1234' && password === '1234') return 'token';
        else return 'error';
    }

    return (
        <Login
            onClickLoginButton={(shopId, password) => onLogIn(shopId, password)}
            loginResult={loginResult}
        />
    )
}

export default withRouter(LoginContainer);