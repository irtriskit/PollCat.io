import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.tertiary};
    padding: 20px;
    text-align: center;

    a {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://www.paypal.me/pollcatdotio" target="_blank">Donate</a> | <a href="https://discord.gg/QH6tH4C" target="_blank">Support</a>
        </StyledFooter>
    );
};
