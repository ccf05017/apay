import Dashboard from 'pages/main/Dashboard';
import PaymentHistory from 'pages/main/PaymentHistory';
import SettlementHistory from 'pages/main/SettlementHistory';
import PaymentCancellation from 'pages/main/PaymentCancellation';
import ShopInfo from 'pages/main/ShopInfo';
import Logout from 'pages/auth/Logout';
import { Redirect } from 'react-router-dom';
import React from 'react';

const contextPath = '/main/';

const mainRoutes = [
    {
        path: contextPath + 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        menu: {
            position: 'top',
            category: 'dashboard'
        }
    },
    {
        path: contextPath + 'payment_history',
        name: '결제내역',
        component: PaymentHistory,
        menu: {
            position: 'top',
            category: 'payment'
        }
    },
    {
        path: contextPath + 'settlement_history',
        name: '정산내역',
        component: SettlementHistory,
        menu: {
            position: 'top',
            category: 'payment'
        }
    },
    {
        path: contextPath + 'payment_cancellation',
        name: '결제취소',
        component: PaymentCancellation,
        menu: {
            position: 'top',
            category: 'payment'
        }
    },
    {
        path: contextPath + 'shop_info',
        name: '상점정보',
        component: ShopInfo,
        menu: {
            position: 'top',
            category: 'shop'
        }
    },
    {
        path: '/auth/logout',
        name: '로그아웃',
        component: <Redirect to='/auth/logout' />,
        menu: {
            position: 'top',
            category: 'shop'
        }
    },
]

export default mainRoutes;