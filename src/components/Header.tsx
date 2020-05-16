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
        color: ${({theme}) => theme.colors.siteTitle};
        text-decoration: none;
    }

    .logo {
        display:flex;
    }

    button {
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    img {
        display: block;
    }
`;

export const Header = ({toggleTheme}) => {
    return (
        <StyledHeader>
            <div className="content-container">
                <a href="/"><h1>PollCat.io</h1></a>
                <div className="logo">
                    <button onClick={toggleTheme}>
                        <img src="/polla.jpg" alt="Polla the Polecat" />
                    </button>
                    <Quoter />
                </div>
            </div>
        </StyledHeader>
    );
};
