import Dashboard from 'pages/main/Dashboard'; 
import PaymentHistory from 'pages/main/PaymentHistory';

const contextPath = '/main';

const mainRoutes = [
    {
        path: contextPath + '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        menu: {
            position: 'top',
            category: 'dashboard'
        }
    },
    {
        path: contextPath + '/payment_history',
        name: '결제내역',
        component: PaymentHistory,
        menu: {
            position: 'top',
            category: 'payment'
        }
    },
]

export default mainRoutes;