import LogIn from 'pages/auth/Login';
import PasswordReset from 'pages/auth/PasswordReset';

const contextPath = '/auth/';

const authRoutes = [
    {
        path: contextPath + 'login',
        name: 'Login',
        component: LogIn
    },
    {
        path: contextPath + 'password_reset',
        name: 'PasswordReset',
        component: PasswordReset
    },
]

export default authRoutes;