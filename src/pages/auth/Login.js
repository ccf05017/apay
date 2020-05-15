import React, { Component } from 'react';
import { Link, Route, NavLink as RRNavLink, withRouter, Switch, NavLink, Redirect } from "react-router-dom";
import mainRoutes from 'routes/main';
import { Menu, Image, Container, Grid, Header } from 'semantic-ui-react';
import {
    JamesInput,
    JamesWrapper,
    JamesHeader,
    JamesButton
} from 'themes/JamesStyles';
import apayMainImg from 'assets/images/img_main.png';
import apayMainLogo from 'assets/images/logo_main.svg';

const Login = (props) => {
    return (
        <JamesWrapper>
            <div className='segment'>
                <div className='l-box'>
                    <img className='logo' src={apayMainLogo} alt='logo' />
                    <p>
                        지갑 없이도<br />
                        언제 어디서나<br />
                        간편하게 결제 가능<br />
                    </p>
                    <span className='copyright'>
                        @Copyright A-CHECK rights reserved<br />
                        Hyundai Autoever
                </span>
                    <img className='main' src={apayMainImg} alt='logo' />
                </div>
                <div className='r-box'>
                    <div className='inner-box'>
                        <JamesHeader color='black' size='48px'>로그인</JamesHeader>
                        <span className='bodytext'>계속하기 위해 로그인해주세요.</span>
                        <JamesInput style={{ height: '60px', marginBottom: '20px', fontSize: '24px' }} placeholder='유저명 또는 이메일주소' />
                        <JamesInput style={{ height: '60px', marginBottom: '20px', fontSize: '24px' }} placeholder='패스워드' />
                        <Link
                            style={{
                                fontSize: '20px',
                                color: '#8391A5',
                                marginBottom: '192px'
                            }}
                            to={'password_reset'}
                            tag={RRNavLink}>
                            <span>패스워드를 잊으셨나요?</span>
                        </Link>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <JamesButton style={{ width: '245px', height: '64px', fontSize: '26px', borderRadius: '50px' }} content='로그인' />
                            <Link
                                style={{
                                    fontSize: '20px',
                                    color: '#8391A5',
                                    marginLeft: '43px'
                                }}
                                to={'register'}
                                tag={RRNavLink}>
                                <span>새로운 가맹점 등록하기</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </JamesWrapper>
    );
}

export default Login;