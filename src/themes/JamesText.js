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