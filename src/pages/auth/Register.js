import React from 'react';
import { Link, NavLink as RRNavLink } from "react-router-dom";
import {
    JamesInput,
    JamesWrapper,
    JamesHeader,
    JamesButton
} from 'themes/JamesStyles';
import apayMainImg from 'assets/images/img_main.png';
import apayMainLogo from 'assets/images/logo_main.svg';

const Register = (props) => {
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
                        <JamesHeader color='black' size='48px'>새로운 가맹점 등록하기</JamesHeader>
                        <span className='bodytext'>A PAY 가맹점 등록을 환영합니다</span>
                        <JamesInput style={{ height: '42px', marginBottom: '10px', fontSize: '18px' }} placeholder='상호명' />
                        <JamesInput style={{ height: '42px', marginBottom: '10px', fontSize: '18px' }} placeholder='미리 발급받은 가맹점 코드' />
                        <JamesInput style={{ height: '42px', marginBottom: '10px', fontSize: '18px' }} placeholder='이메일주소' />
                        <JamesInput style={{ height: '42px', marginBottom: '10px', fontSize: '18px' }} placeholder='전화번호' />
                        <JamesInput style={{ height: '42px', marginBottom: '10px', fontSize: '18px' }} placeholder='패스워드' />
                        <JamesInput style={{ height: '42px', marginBottom: '10px', fontSize: '18px' }} placeholder='패스워드 확인' />
                        <span style={{
                            fontSize: '20px',
                            color: '#8391A5',
                            marginBottom: '60px'
                        }}></span>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <JamesButton color='#4280F5' style={{ width: '245px', height: '64px', fontSize: '26px', borderRadius: '50px' }} content='가맹점 등록' />
                            <Link
                                style={{
                                    fontSize: '20px',
                                    color: '#8391A5',
                                    marginLeft: '43px'
                                }}
                                to={'login'}
                                tag={RRNavLink}>
                                <span>로그인</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </JamesWrapper>
    );
}

export default Register;