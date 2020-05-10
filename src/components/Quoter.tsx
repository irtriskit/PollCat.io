import React, {
    useEffect,
    useState,
} from 'react';
import styled from 'styled-components';
import { ESizes } from '../models/Sizes';
import { IQuote } from '../models/Quote';

const StyledActiveQuote = styled.div`
    color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.font.sizes[ESizes.regular]};
    font-style: italic;   
    align-items: center;
    display: flex;

    .quote-text {
        color: ${({theme}) => theme.colors.primary};
        position: relative;
        background: ${({theme}) => theme.colors.accent};
        border-radius: .4em;
        padding: 10px;
        margin-left: 15px;
        line-height: 1.5;
    }
    
    .quote-text:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-right-color: ${({theme}) => theme.colors.accent};
        border-left: 0;
        margin-top: -8px;
        margin-left: -8px;
    }
`;

const chooseRandomFromList = (list: Array<any>) => list[Math.floor(Math.random() * list.length)];

const ActiveQuote : React.FC<IQuote> = ({
    text
}) => {
    return (
        <StyledActiveQuote>
            <img src="/polla.jpg" alt="Polla the Polecat" />
            <span className="quote-text">{ text }</span>
        </StyledActiveQuote>
    );
};

export const Quoter = () => {
    const [
        quotes,
        setQuotes
    ] = useState<Array<IQuote>>([]);

    const [
        activeQuote,
        setActiveQuote
    ] = useState<IQuote>();

    useEffect(() => {
        // get quotes on load
        import('../quoteList').then(({ quoteList }) => setQuotes(quoteList))
    }, []);

    useEffect(() => {
        // when quotes are set, choose one to be active
        setActiveQuote(chooseRandomFromList(quotes))
    }, [
        quotes,
    ]);

    return (
        activeQuote ? <ActiveQuote text={activeQuote.text} /> : null
    );
};
