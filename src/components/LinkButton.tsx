import React from 'react';
import styled from 'styled-components';
import { lighten } from '../helpers/ColorHelper';

const StyledLinkButton = styled.a<LinkButtonProps>`
    background-color: ${({theme}) => theme.colors.tertiary};
    border-radius: 2px;
    color: ${({theme}) => theme.colors.primary};
    outline: none;
    border-width: 0;
    font-size: 20px;
    padding: 10px 30px;
    cursor: pointer;
    text-decoration: none;
    transition: 100ms all ease-in-out;
    
    &:hover {
        background-color: ${({theme}) => lighten(theme.colors.tertiary, 10)};
    }
    
    &:active {
        background-color: ${({theme}) => lighten(theme.colors.tertiary, 20)};
    }
`;

export const LinkButton: React.FC<LinkButtonProps> = ({
    children,
    href,
}) => {
    return (
        <StyledLinkButton href={href}>{children}</StyledLinkButton>
    );
};

interface LinkButtonProps {
    children: any;
    href: string;
}
