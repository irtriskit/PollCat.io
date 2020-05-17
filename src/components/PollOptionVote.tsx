import * as React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { ESizes } from '../models/Sizes';

const StyledInput = styled.input`
    display: none;
`;

const StyledLabel = styled.span`
    color: ${({theme}) => theme.colors.pollText};
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.sizes[ESizes.regular]};
`;

const StyledPollOptionVote = styled.label`
    flex: 1 0 auto;
    display: flex;
    cursor: pointer;
    background: ${({theme}) => theme.colors.pollBackground};
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    
    &.active-option {
        outline: 2px solid ${({theme}) => theme.colors.accent};
    }
`;

interface PollOptionVoteProps {
    index: number,
    name: string,
    value: string,
    votes: Array<number>,
    onVote: Function
}

export const PollOptionVote: React.FC<PollOptionVoteProps> = ({
    index,
    name,
    value,
    votes,
    onVote
}) => {
    const ref = useRef(null);

    const handleClick = ({onVote, index}: { onVote: Function, index: number }) => {
        onVote(() => [index]);
        //const option = ref.current;
    };

    let classes = '';

    if (votes[0] === index) {
        classes += 'active-option';
    }

    // option.classList.toggle('active-option');

    return (
        <StyledPollOptionVote htmlFor={`poll-vote-${index}`} ref={ref} className={classes}>
            <StyledInput id={`poll-vote-${index}`} name={name} value={value} type="radio" onClick={() => handleClick({onVote, index})} />
            <StyledLabel>{value}</StyledLabel>
        </StyledPollOptionVote>
    );
};
