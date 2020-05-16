import * as React from 'react';
import styled from 'styled-components';
import { Quoter } from './Quoter';

const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.secondary};
    margin-bottom: 20px;
    padding: 20px;

    .content-container {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    a {
        color: ${({theme}) => theme.colors.tertiary};
        text-decoration: none;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <div className="content-container">
                <a href="/"><h1>PollCat.io</h1></a>
                <Quoter />
            </div>
        </StyledHeader>
    );
};
