import * as React from 'react';
import styled from 'styled-components';
import { ESizes } from '../models/Sizes';

const StyledPollResult = styled.div`
    flex: 1;
    flex-direction: row;
    background: ${({theme}) => theme.colors.resultBackground};
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    position: relative;
`;

const StyledLabel = styled.div`
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.font.family};
    margin-left: ${({theme}) => theme.padding[ESizes.smallest]};
    font-size: ${({theme}) => theme.font.sizes[ESizes.regular]};
    z-index: ${({theme}) => theme.zIndex.high};
    pointer-events: none;
    position: relative;
    
    & + & {
        padding-top: ${({theme}) => theme.padding[ESizes.smallest]};
    }
`;

const VotePercentageBar = styled.div<VotePercentageBarProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: ${({ votePercentage }) => `${100 - votePercentage}%`};
    background: ${({theme}) => theme.colors.accent};
    z-index: ${({theme}) => theme.zIndex.default};
    transition: 250ms box-shadow ease-in-out;
    
    &:hover {
        box-shadow: 0 0 2px 2px ${({theme}) => theme.colors.accent};
    }
`;

interface VotePercentageBarProps {
    votePercentage: number;
}

export const PollResult: React.FC<PollResultProps> = ({
    totalVotes,
    value,
    votes,
}) => {
    const votePercentage = parseFloat(((votes / totalVotes) * 100).toPrecision(3));

    return (
        <StyledPollResult>
            <StyledLabel>{value}</StyledLabel>
            <StyledLabel>{votes} ({votePercentage}%)</StyledLabel>
            <VotePercentageBar votePercentage={votePercentage} />
        </StyledPollResult>
    );
};

interface PollResultProps {
    value: string,
    votes: number,
    totalVotes: number,
}
