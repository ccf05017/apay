import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';

export const MenuItemText = styled.p`
    margin: auto;
    color: ${props => props.color ? props.color : 'white' };
    width: 74px;
    height: 24px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.16px;
    text-align: center;
`

export const JamesHeader = styled.span`
    font-size: ${props => props.size === 1 ? '28px' : props.size === 2 ? '24px' : props.size === 3 ? '18px' : props.size};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.color ? props.color : '#3b4a5f'};
`

export const JamesNormalText = styled.span`
    font-size: ${props => props.size};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.color ? props.color : '#8391A5'};
`