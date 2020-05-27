import React from 'react';
import { useDispatch } from 'react-redux';
import Login from './Login';
import { logIn } from 'modules/auth';
import { withRouter } from "react-router-dom";

function LoginContainer(props) {
    const dispatch = useDispatch();
    const onLogIn = (shopId, password) => {
        console.log(shopId, password)
        //TODO login api call 여기서 token 등을 받아와야 함
        let token = getToken(shopId, password);
        sessionStorage.setItem('shopId', shopId);
        sessionStorage.setItem('token', token)
        dispatch(logIn(token === 'error' ? false : true));
        props.history.push('/main');  //로그인 성공 시 dashboard 로 이동
    }

    //TODO 백엔드 개발전까지 임시로 구현함
    const getToken = (shopId, password) => {
        if (shopId === '1234' && password === '1234') return 'token';
        else return 'error';
    }

    console.log('render LoginContainer')

    return (
        <Login
            onClickLoginButton={(shopId, password) => onLogIn(shopId, password)}
        />
    )
}

export default withRouter(LoginContainer);