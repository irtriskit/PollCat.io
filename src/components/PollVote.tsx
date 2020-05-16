import React, {
    FormEvent,
    useEffect,
    useState,
} from 'react';
import styled from 'styled-components';
import { ESizes } from '../models/Sizes';
import { lighten } from '../helpers/ColorHelper';
import { PollData } from '../models/Poll';
import { Vote } from '../models/Vote';
import { AxiosResponse } from 'axios';
import { PollApi } from '../helpers/PollApi';
import { PollOptionVote } from './PollOptionVote';
import { Urls } from '../Urls';
import Router from "next/router";
// import { isFirstParty } from '../helpers/AppHelper';

const StyledPollVote = styled.form<PollVoteProps>`
    width: 100%;
    background: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
`;

const StyledPollTitle = styled.h2`
    font-size: ${({theme}) => theme.font.sizes[ESizes.largest]};
    font-family: ${({theme}) => theme.font.family};
    color: ${({theme}) => theme.colors.tertiary};
`;

const StyledButton = styled.button`
    background-color: ${({theme}) => theme.colors.tertiary};
    border-radius: 2px;
    color: ${({theme}) => theme.colors.primary};
    outline: none;
    border-width: 0;
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.sizes[ESizes.large]};
    margin-top: 15px;
    padding: ${({theme}) => `${theme.font.sizes[ESizes.smaller]} ${theme.font.sizes[ESizes.largest]}`};
    
    &:hover {
        background-color: ${({theme}) => lighten(theme.colors.tertiary, 10)};
    }
    
    &:active {
        background-color: ${({theme}) => lighten(theme.colors.tertiary, 20)};
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex: 1;
`;

export const PollVote: React.FC<PollVoteProps> = ({
    pollId,
}) => {
    const [
        activePoll,
        setActivePoll,
    ] = useState<PollData>();

    const [
        selectedOptions,
        setSelectedOptions,
    ] = useState<Array<number>>([]);

    useEffect(() => {
        // get poll from api by pollId
        PollApi.getPollByPollId(pollId as string)
            .then(({ data }: AxiosResponse) => {
                const poll = JSON.parse(data);

                setActivePoll(poll);
            });
    }, []);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const vote: Vote = {
            pollid: pollId as string,
            options: selectedOptions
        };

        PollApi.postVote(vote)
            .then(() => {
                // if (isFirstParty) {
                Router.push('/[id]/results', `/${pollId}/results`);
                // }
            })
            .catch(console.error);
    };

    return (
        <StyledPollVote onSubmit={handleSubmit} method="post">
            <StyledDiv>
                <StyledPollTitle>{activePoll && activePoll.title}</StyledPollTitle>
            </StyledDiv>
            {
                activePoll
                && activePoll.options
                && activePoll.options.map((option, index) => {
                    return (
                        <PollOptionVote
                            key={index}
                            index={index}
                            name={'vote'}
                            value={option.optionText}
                            votes={selectedOptions}
                            onVote={setSelectedOptions}
                        />
                    );
                })
            }
            <div>
                <StyledButton type={'submit'}>Submit Vote</StyledButton>
            </div>
        </StyledPollVote>
    );
};

interface PollVoteProps {
    pollId?: string;
    onSubmit?: Function;
    method?: 'post' | 'get' | 'put' | 'options';
}
