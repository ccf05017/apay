import React, { useState } from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link, Route, NavLink as RRNavLink, withRouter, Switch, NavLink, Redirect } from "react-router-dom";
import mainRoutes from '../routes/main';
import apayMainLogo from 'assets/images/logo_main.svg';
import {
    MenuItemText
} from 'themes/JamesText';
import {
    JamesDropdown
} from 'themes/JamesStyles';

const MainLayout = (props) => {

    const [activeItem, setActiveItem] = useState('');

    const handleOnClickMenuItem = (event, { name }) => {
        setActiveItem(name);
    }

    return (
        <div>
            <Menu fixed='top' secondary style={{ backgroundColor: '#304DB9' }}>
                <Container style={{ width: '75%' }}>
                    <NavLink to="/main/dashboard">
                        <Menu.Item>
                            <Image src={apayMainLogo} />
                        </Menu.Item>
                    </NavLink>
                    <Menu.Menu position='right'>
                        {mainRoutes.filter(route => route.menu.position === 'top' && route.menu.category === 'dashboard').map((route, key) => {
                            return (
                                <Link
                                    style={{ float: 'right' }}
                                    to={route.path}
                                    tag={RRNavLink}
                                    key={key}>
                                    <Menu.Item
                                        name={route.name}
                                        active={activeItem === route.name}
                                        onClick={handleOnClickMenuItem}>
                                        <MenuItemText>{route.name}</MenuItemText>
                                    </Menu.Item>
                                </Link>
                            );
                        })
                        }
                        <JamesDropdown
                            item
                            text='매출관리'
                            active
                            style={{ color: 'white' }}
                        >
                            <JamesDropdown.Menu>
                                {mainRoutes.filter(route => route.menu.position === 'top' && route.menu.category === 'payment').map((route, key) => {
                                    return (
                                        <Link
                                            style={{ float: 'right' }}
                                            to={route.path}
                                            tag={RRNavLink}
                                            key={key}>
                                            <JamesDropdown.Item
                                                onClick={handleOnClickMenuItem}>
                                                <MenuItemText color='#304DB9'>{route.name}</MenuItemText>
                                            </JamesDropdown.Item>
                                        </Link>
                                    );
                                })
                                }
                            </JamesDropdown.Menu>
                        </JamesDropdown>
                        <JamesDropdown
                            item
                            text='상점관리'
                            active
                            style={{ color: 'white' }}
                        >
                            <JamesDropdown.Menu>
                                {mainRoutes.filter(route => route.menu.position === 'top' && route.menu.category === 'shop').map((route, key) => {
                                    return (
                                        <Link
                                            style={{ float: 'right' }}
                                            to={route.path}
                                            tag={RRNavLink}
                                            key={key}>
                                            <JamesDropdown.Item
                                                onClick={handleOnClickMenuItem}>
                                                <MenuItemText color='#304DB9'>{route.name}</MenuItemText>
                                            </JamesDropdown.Item>
                                        </Link>
                                    );
                                })
                                }
                            </JamesDropdown.Menu>
                        </JamesDropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
            <div style={{ paddingTop: '9vh' }}>
                <Switch>
                    {mainRoutes.map((route, key) => {
                            return (
                                <Route
                                    exact
                                    path={route.path}
                                    component={route.component}
                                    key={key} />
                            )
                    })}
                    {/* 위에 라우터에 안걸릴때 기본적으로 보여줄 화면 */}
                    <Redirect to="/main/dashboard" />
                </Switch>
            </div>
        </div>
    );

}

export default withRouter(MainLayout);