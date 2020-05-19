import LoginContainer from 'pages/auth/LoginContainer';
import PasswordReset from 'pages/auth/PasswordReset';
import Register from 'pages/auth/Register';

const contextPath = '/auth/';

const authRoutes = [
    {
        path: contextPath + 'login',
        name: 'Login',
        component: LoginContainer
    },
    {
        path: contextPath + 'password_reset',
        name: 'PasswordReset',
        component: PasswordReset
    },
    {
        path: contextPath + 'register',
        name: 'Register',
        component: Register
    },
    
]

export default authRoutes;