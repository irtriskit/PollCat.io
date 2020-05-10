import * as React from 'react';
import styled from 'styled-components';
import { Quoter } from './Quoter';

const StyledHeader = styled.header`
    align-items: center;
    background-color: ${({theme}) => theme.colors.secondary};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 20px;

    a {
        color: ${({theme}) => theme.colors.tertiary};
        text-decoration: none;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <a href="/"><h1>PollCat.io</h1></a>
            <Quoter />
        </StyledHeader>
    );
};
