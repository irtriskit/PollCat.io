import React, {
    useEffect,
    useState,
} from 'react';
import styled from 'styled-components';
import {
    PollData,
    PollResponseError,
} from '../models/Poll';
import { AxiosResponse } from 'axios';
import { ESizes } from '../models/Sizes';
import { PollResult } from './PollResult';
import { PollApi } from '../helpers/PollApi';
import { WebSocketApi } from '../helpers/WebSocketApi';
import { Urls } from '../Urls';
import { PrimaryButton } from './PrimaryButton';
import { LinkButton } from './LinkButton';
import { ShareButton } from './ShareButton';

const StyledPollResults = styled.div`
    width: 100%;
    background: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledPollTitle = styled.h2`
    font-size: ${({theme}) => theme.font.sizes[ESizes.largest]};
    font-family: ${({theme}) => theme.font.family};
    color: ${({theme}) => theme.colors.tertiary};
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;

const StyledTotalVoteContainer = styled.div`
    font-size: ${({theme}) => theme.font.sizes[ESizes.larger]};
    font-family: ${({theme}) => theme.font.family};
    color: ${({theme}) => theme.colors.tertiary};
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px 0;
`;

const StyledSecondaryButtonContainer = styled.div`
    align-items: right;
    display: flex;
    margin-bottom: 10px;
`;

export const PollResults: React.FC<PollResultsProps> = ({
    pollId,
}) => {
    const [
        activePoll,
        setActivePoll,
    ] = useState<PollData>();

    const [
        totalVotes,
        setTotalVotes
    ] = useState<number>(0);

    useEffect(() => {
        PollApi.getPollByPollId(pollId as string)
            .then(({ data }: AxiosResponse) => {
                const poll: PollData = JSON.parse(data);
                if (poll) {
                    updatePoll(poll);
                }
            });
    }, []);

    useEffect(() => {
        const socketUrl = `${Urls.webSocketUrl}?pollid=${pollId}`;
        const webSocket = WebSocketApi.connect(socketUrl);

        if (webSocket) {
            webSocket.onmessage = (event: WebSocketMessageEvent) => {
                const {
                    data,
                } = event;

                if (data) {
                    const pollData: PollData | PollResponseError = JSON.parse(data);
                    if ((pollData as PollResponseError)?.message) {
                        console.error(data);
                        return;
                    }

                    updatePoll(pollData as PollData);
                }
            }
        }
    }, []);

    const updatePoll = (poll: PollData) => {
        setActivePoll(poll);

        let voteCount = 0;
        poll.options.sort((a, b) => b.optionVotes - a.optionVotes).forEach(o => voteCount += o.optionVotes);
        setTotalVotes(voteCount);
    };

    return (
        <StyledPollResults>
            <div style={{flex: 1, display: 'flex'}}>
                <StyledPollTitle>{activePoll && activePoll.title}</StyledPollTitle>
            </div>
            {
                activePoll
                && activePoll.options
                && activePoll.options.map((option, index) => (
                    <PollResult
                        key={index}
                        value={option.optionText}
                        votes={option.optionVotes}
                        totalVotes={totalVotes}
                    />
                ))
            }
            <StyledButtonContainer>
                <StyledTotalVoteContainer>Total votes: { totalVotes }</StyledTotalVoteContainer>
                <StyledSecondaryButtonContainer>
                    <LinkButton href={"/" + pollId}>Vote</LinkButton>
                    <ShareButton />
                </StyledSecondaryButtonContainer>
            </StyledButtonContainer>
        </StyledPollResults>
    );
};

interface PollResultsProps {
    pollId: string;
}
