import Dashboard from 'pages/main/Dashboard'; 
import PaymentHistory from 'pages/main/PaymentHistory';
import SettlementHistory from 'pages/main/SettlementHistory';
import PaymentCancellation from 'pages/main/PaymentCancellation';
import ShopInfo from 'pages/main/ShopInfo';

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
    {
        path: contextPath + '/settlement_history',
        name: '정산내역',
        component: SettlementHistory,
        menu: {
            position: 'top',
            category: 'payment'
        }
    },
    {
        path: contextPath + '/payment_cancellation',
        name: '결제취소',
        component: PaymentCancellation,
        menu: {
            position: 'top',
            category: 'payment'
        }
    },
    {
        path: contextPath + '/shop_info',
        name: '상점정보',
        component: ShopInfo,
        menu: {
            position: 'top',
            category: 'shop'
        }
    },
    {
        path: contextPath + '/logout',
        name: '로그아웃',
        component: PaymentCancellation,
        menu: {
            position: 'top',
            category: 'shop'
        }
    },
]

export default mainRoutes;