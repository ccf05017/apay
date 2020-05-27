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

const PasswordReset = (props) => {
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
                        <JamesHeader color='black' size='48px'>임시 패스워드 발급</JamesHeader>
                        <span className='bodytext'>등록하셨던 이메일주소를 입력해 주세요</span>
                        <JamesInput style={{ height: '60px', marginBottom: '20px', fontSize: '24px' }} placeholder='이메일주소' />
                        <JamesInput style={{ height: '60px', marginBottom: '20px', fontSize: '24px' }} placeholder='이메일주소 확인' />
                        <span style={{
                            fontSize: '20px',
                            color: '#8391A5',
                            marginBottom: '192px'
                        }}>등록시 입력하셨던 이메일주소로 임시패스워드가 발급됩니다</span>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <JamesButton color='#4280F5' style={{ width: '245px', height: '64px', fontSize: '26px', borderRadius: '50px' }} content='메일발송' />
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

export default PasswordReset;