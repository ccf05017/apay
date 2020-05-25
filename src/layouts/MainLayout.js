import React, { useState } from 'react';
import { Menu, Image, Container, Grid, Header, Dropdown } from 'semantic-ui-react';
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

    console.log(props);

    const [activeItem, setActiveItem] = useState('');

    const handleOnClickMenuItem = (event, { name }) => {
        console.log(name)
        setActiveItem(name);
    }

    return (
        <div>
            <Menu fixed='top' secondary style={{ backgroundColor: '#304DB9' }}>
                <Container style={{ width: '75%' }}>
                    <NavLink to="/">
                        <Menu.Item>
                            <Image src={apayMainLogo} />
                        </Menu.Item>
                    </NavLink>
                    <Menu.Menu position='right'>
                        {mainRoutes.filter(route => route.menu.position === 'top' && route.menu.category === 'dashboard').map((route, key) => {
                            console.log(route)
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
                                    console.log(route)
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
                                    console.log(route)
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
                        if (route.subRoutes) {
                            let subRoutes = [];
                            route.subRoutes.map((subRoute, subKey) => {
                                subRoutes.push(
                                    <Route
                                        path={subRoute.path}
                                        component={subRoute.component}
                                        key={subKey} />
                                )
                                return null;
                            });
                            return subRoutes;
                        } else {
                            return (
                                <Route
                                    exact
                                    path={route.path}
                                    component={route.component}
                                    key={key} />
                            )
                        }
                    })}
                    <Redirect to="/main" />
                </Switch>
            </div>
        </div>
        // <Menu fixed='top' secondary>
        //     <Container style={{ width: '75%' }}>
        //         <NavLink to="/">
        //             <Menu.Item>
        //                 <Image src={apayMainLogo} size={'tiny'} />
        //             </Menu.Item>
        //         </NavLink>
        //         <Menu.Menu position='right'>
        //             {
        //                 mainRoutes.filter(route => route.topMenu).map((route, key) => {
        //                     let color = activeItem === route.name || this.props.location.pathname.includes(route.name.toLowerCase()) ? 'white' : '#8391a5';
        //                     console.log(activeItem)
        //                     console.log(color)
        //                     return (
        //                         <Link
        //                             style={{ float: 'right' }}
        //                             to={route.path}
        //                             tag={RRNavLink}
        //                             key={key}>
        //                             <Menu.Item
        //                                 name={route.name}
        //                                 active={activeItem === route.name}
        //                                 onClick={this.handleOnClickMenuItem}
        //                             >
        //                                 <p
        //                                     style={{ color: `${color}` }}
        //                                 >
        //                                     {route.name}
        //                                 </p>
        //                             </Menu.Item>
        //                         </Link>
        //                     );
        //                 })
        //             }
        //         </Menu.Menu>

        //     </Container>
        // </Menu>
        // <Switch>
        //     {mainRoutes.map((route, key) => {
        //         return (
        //             <Route
        //                 exact
        //                 path={route.path}
        //                 component={route.component}
        //                 key={key}
        //             />
        //         )
        //     })}
        // </Switch>
    );

}

export default withRouter(MainLayout);