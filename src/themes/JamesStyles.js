import styled from 'styled-components';
import { Input, Button, Container, Dropdown } from 'semantic-ui-react';


export const JamesWrapper = styled.div`
    height: 100vh;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #F8F8F8;

    div.segment {
        display: flex;
        flex-direction: row;
        width: 1280px;
        border-radius: 25px;
        box-shadow: 0 10px 15px 0 rgba(131, 145, 165, 0.5);
    }

    div.segment > .l-box {
        display: flex;
        flex-direction: column;
        width: 50%;
        border-radius: 20px 0 0 20px;
        background: #304db9;
    }

    div.segment > .r-box {
        display: flex;
        /* flex-direction: column; */
        width: 50%;
        border-radius: 0 20px 20px 0;
        background: white;
    }

    .inner-box {
        display: flex;
        flex-direction: column;
        margin: 45px;
        background: white;
        flex: 1;
    }

    img.logo {
        width: 144px;
        float: left;
        margin-top: 45px;
        margin-left: 45px;
    }

    img.main {
        width: 640px;
        float: left;
        margin-top: -50px;
    }

    p {
        color: white;
        margin-top: 30px;
        margin-left: 45px;
        font-size: 24px;
        margin-bottom: 0px;
    }

    .copyright {
        color: #98ADFF;
        margin-top: 15px;
        margin-left: 45px;
        font-size: 20px;
    }

    .bodytext {
        color: #7B7B7B;
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 80px;
    }
`

export const JamesHeader = styled.span`
    font-size: ${props => props.size === 1 ? '28px'
        : props.size === 2 ? '24px'
        : props.size === 3 ? '18px'
        : props.size ? props.size
        : '18px'};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.color ? props.color : '#3b4a5f'};
`

export const JamesInput = styled(Input)`
    &&& input {
        background: white;
        padding: 8px;
        display: block;
        border: 1 solid #8391A5;
        width: 100%;
        -webkit-tap-highlight-color: #eff1f7;
        float: left;
    }

    &&& input:focus{
        outline: none;
        background: white;
        padding: 8px;
        display: block;
        border: 1 solid #8391A5;
        width: 100%;
        -webkit-tap-highlight-color: #eff1f7;
        float: left;
    }
`

export const JamesButton = styled(Button)`
    &&& {
        border-radius: 24px;
        background-color: ${props => props.negativestyle ? 'white' : props.color};
        color: ${props => props.negativestyle ? props.color : 'white'};
        height: 40px;
    }

    &&&:hover {
        border-radius: 24px;
        background-color: ${props => props.negativestyle ? 'white' : '#3373eb'};
        color: ${props => props.negativestyle ? props.color : 'white!important'};
        height: 40px;
    }
`

export const JamesCard = styled(Container)`
    height: ${props => props.height ? props.height : 'inherit'};
    width: 100%!important;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 10px 14px 0 rgba(131, 145, 165, 0.1);
    padding: 24px;
    /* margin: 0px!important; */
`

export const JamesMenuDropdown = styled(Dropdown)`
    /* width: 32px; */
    &&& .menu.transition.visible {
        border-radius: 4px;
        border: solid 1px #8391a5;
    }

    &&& .menu.transition.visible > .item {
        /* width: 41px; */
        /* height: 22px; */
        /* font-family: SpoqaHanSans; */
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #4280f5;
    }

    &&&:hover {
        background-color: #e4e7ef;
    }

    &&& i.icon {
        margin: 0;
    }

    &&& i.icon:before {
        content: ${props => props.customicon ? 'url(' + props.customicon + ')' : props.icon};
        margin: 0;
    }
`

export const JamesDropdown = styled(Dropdown)`
    /* &&& .menu.transition.visible {
        border-radius: 4px;
        border: solid 1px #8391a5;
    }

    &&& .menu.transition.visible > .item {
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #4280f5;
    }

    &&&:hover {
        background-color: #e4e7ef;
    }

    &&& i.icon {
        margin: 0;
    }

    &&& i.icon:before {
        content: ${props => props.customicon ? 'url(' + props.customicon + ')' : props.icon};
        margin: 0;
    } */

    &&& .text {
        margin: auto;
        color: ${props => props.color ? props.color : 'white' };
        width: 74px;
        height: 24px;
        font-size: 16px;
        font-weight: bold!important;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: -0.16px;
        text-align: center;
    }

`

export const JamesButtonGroup = styled.div`
    border: 1px solid #e4e7ef;
    border-radius: 24px;
    padding: 4px 4px 4px 4px;
    display: inline-flex;

    button {
        display: inline-table;
        flex-direction: row;
        /* background: ${props => props.active ? '#4280F5!important' : 'white!important'}; */
        border-radius: 24px!important;
        margin: 0px!important;
        /* color: ${props => props.active ? 'white!important' : '#4280F5!important'}; */
    }
`