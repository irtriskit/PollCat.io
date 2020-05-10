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
`;

const chooseRandomFromList = (list: Array<any>) => list[Math.floor(Math.random() * list.length)];

const ActiveQuote : React.FC<IQuote> = ({
    text
}) => {
    return (
        <StyledActiveQuote>
            {text}
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
