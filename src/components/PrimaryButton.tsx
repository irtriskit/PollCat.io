import React from 'react';
import styled from 'styled-components';
import { lighten } from '../helpers/ColorHelper';

const StyledPrimaryButton = styled.button<PrimaryButtonProps>`
    background-color: ${({theme}) => theme.colors.accent};
    border-radius: 2px;
    color: ${({theme}) => theme.colors.primary};
    outline: none;
    border-width: 0;
    font-size: 20px;
    padding: 10px 30px;
    cursor: pointer;
    transition: 100ms all ease-in-out;
    
    &:hover {
        background-color: ${({theme}) => lighten(theme.colors.accent, 10)};
    }
    
    &:active {
        background-color: ${({theme}) => lighten(theme.colors.accent, 20)};
    }
`;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    type,
}) => {
    return (
        <StyledPrimaryButton type={type}>{children}</StyledPrimaryButton>
    );
};

interface PrimaryButtonProps {
    children: any;
    type?: 'button' | 'submit' | 'reset';
}
