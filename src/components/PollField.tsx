import * as React from 'react';
import styled from 'styled-components';

interface PollFieldProps {
    name: string,
    inputType?: string,
    placeholder?: string,
}

const StyledPollField = styled.div`
    display: flex;
    flex: 1;
    max-width: 100%;
    background: ${({theme}) => theme.colors.primary};
    margin-bottom: 10px;
    font-family: ${({theme}) => theme.font.family};
`;

const StyledInput = styled.input`
    color: ${({theme}) => theme.colors.tertiary};
    background-color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.font.family};
    font-size: 18px;
    padding: 15px;
    box-shadow: none;
    border: 0 solid #738694;
    border-bottom-width: 2px;
    flex: 1 0 auto;
`;

export const PollField: React.FC<PollFieldProps> = ({
    name,
    inputType = 'text',
    placeholder = 'Enter poll option'
}) => {
    return (
        <StyledPollField>
            <StyledInput name={name} type={inputType} placeholder={placeholder} autoComplete="off" />
        </StyledPollField>
    );
};
