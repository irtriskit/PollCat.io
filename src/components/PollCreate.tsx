import React, {
    FormEvent,
    useRef,
} from 'react';
import styled from 'styled-components';
import { PollConfig } from '../models/PollConfig';
import { NewPoll } from '../models/Poll';
import { ESizes } from '../models/Sizes';
import { PollField } from './PollField';
import { PollOption } from '../models/PollOption';
import { PollApi } from '../helpers/PollApi';
import { Urls } from '../Urls';
// import { isFirstParty } from '../helpers/AppHelper';
import { PollButton } from './PollButton';
import Router from "next/router";

const StyledPollCreate = styled.form<PollCreateProps>`
    width: 100%;
    //max-width: 100%;
    background: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
`;

const StyledTitleInput = styled.input`
    max-width: 100%;
    font-size: ${({theme}) => theme.font.sizes[ESizes.larger]};;
    color: ${({theme}) => theme.colors.pollText};
    background-color: ${({theme}) => theme.colors.pollBackground};
    border-width: 0;
    padding: 10px;
    margin-bottom: 20px;
    flex: 1 0 auto;
`;

const StyledActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    margin-top: 10px;
    
    @media (min-width: 480px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex: 1;
    max-width: 100%;
`;

export const PollCreate = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!form || !form.current) {
            return;
        }

        const title = (form.current.querySelector('[name="title"]') as HTMLInputElement).value;
        const optionsFields = [].slice.call(form.current.querySelectorAll('[name^="option"]'));
        const options: Array<PollOption> = optionsFields
            .filter((field: HTMLInputElement) => field?.value?.length)
            .map((field: HTMLInputElement) => ({
                optionText: field.value,
                optionVotes: 0
            }));

        const config: PollConfig = {
            allowMultipleResponses: false,
            duplicationChecking: 'none',
        };

        const poll: NewPoll = {
            title,
            options,
            config,
        };

        PollApi.postPoll(poll)
            .then((response) => {
                // if (isFirstParty) {
                Router.push('/[id]/vote', `/${response.data}/vote`);
                // }
            })
            .catch(console.error);
    };

    return (
        <StyledPollCreate onSubmit={handleSubmit} ref={form}>
            <TitleContainer>
                <StyledTitleInput type={'text'} placeholder={'Type your question here'} name={'title'} autoComplete="off" />
            </TitleContainer>
            <PollField name={'option1'} placeholder={'Enter poll option'} />
            <PollField name={'option2'} placeholder={'Enter poll option'} />
            <PollField name={'option3'} placeholder={'Enter poll option'} />
            <PollField name={'option4'} placeholder={'Enter poll option'} />
            <PollField name={'option5'} placeholder={'Enter poll option'} />
            <StyledActionContainer>
                <PollButton type={'submit'}>Create Poll</PollButton>
            </StyledActionContainer>
        </StyledPollCreate>
    );
};

interface PollCreateProps {

}
