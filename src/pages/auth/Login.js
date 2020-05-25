import React, { useState } from 'react';
import { Link, NavLink as RRNavLink, withRouter } from "react-router-dom";
import {
    JamesInput,
    JamesWrapper,
    JamesHeader,
    JamesButton
} from 'themes/JamesStyles';
import apayMainImg from 'assets/images/img_main.png';
import apayMainLogo from 'assets/images/logo_main.svg';
// import { connect } from 'react-redux';

const Login = ({ loginResult, onClickLoginButton }) => {
    const [inputs, setInputs] = useState({
        shopId: '',
        password: ''
    });

    const { shopId, password } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onClick = (e) => {
        onClickLoginButton(shopId,password)
    }

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
                        <JamesInput
                            name='shopId'
                            style={{
                                height: '60px',
                                marginBottom: '20px',
                                fontSize: '24px'
                            }}
                            placeholder='가맹점코드 또는 이메일주소'
                            onChange={onChange}
                            value={shopId}
                        />
                        <JamesInput
                            name='password'
                            type='password'
                            style={{
                                height: '60px',
                                marginBottom: '20px',
                                fontSize: '24px'
                            }}
                            placeholder='패스워드'
                            onChange={onChange}
                            value={password}
                        />
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
                            <JamesButton
                                color='#4280F5'
                                style={{
                                width: '245px',
                                height: '64px',
                                fontSize: '26px',
                                borderRadius: '50px'
                            }}
                                content='로그인'
                                onClick={onClick}/>
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