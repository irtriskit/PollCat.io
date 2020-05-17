import React, {
    useEffect,
    useState,
} from 'react';
import styled from 'styled-components';
import { lighten } from '../helpers/ColorHelper';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const StyledShareButton = styled.button`
    background-color: ${({theme}) => theme.colors.tertiary};
    border-radius: 2px;
    color: ${({theme}) => theme.colors.primary};
    display: block;
    outline: none;
    border-width: 0;
    font-size: 20px;
    margin-left: 10px;
    padding: 10px 30px;
    cursor: pointer;
    transition: 100ms all ease-in-out;
    
    &:hover {
        background-color: ${({theme}) => lighten(theme.colors.tertiary, 10)};
    }
    
    &:active {
        background-color: ${({theme}) => lighten(theme.colors.tertiary, 20)};
    }
`;

export const ShareButton: React.FC = () => {
    const [
        buttonText,
        setButtonText
    ] = useState<string>("Share");

    useEffect( () => {
      const i_id = setInterval(() => {
        setButtonText("Share")
      },5000);
      return () => {
        clearInterval(i_id);
      }
    },[]);

    return (
        <CopyToClipboard text={window.location.href}
            onCopy={() => setButtonText("Copied")}>
            <StyledShareButton type="button">{buttonText}</StyledShareButton>
        </CopyToClipboard>
    );
};
