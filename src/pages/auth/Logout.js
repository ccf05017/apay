import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'modules/auth';
import { withRouter } from "react-router-dom";

const Logout = (props) => {

    const dispatch = useDispatch();
    sessionStorage.removeItem('shopId');
    sessionStorage.removeItem('token');
    dispatch(logOut());
    props.history.push('/auth/login');
    
    return (
        <div></div>
    );
}

export default withRouter(Logout);