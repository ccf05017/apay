import Dashboard from 'pages/main/Dashboard'; 
import PaymentHistory from 'pages/main/PaymentHistory';

const contextPath = '/main';

const mainRoutes = [
    {
        path: contextPath + '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        topMenu: false
    },
    {
        path: contextPath + '/payment_history',
        name: '결제내역',
        component: PaymentHistory,
        topMenu: true
    },
]

export default mainRoutes;