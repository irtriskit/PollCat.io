import * as React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`
    background-color: ${({theme}) => theme.colors.accent};
    color: ${({theme}) => theme.colors.primary};
    line-height: 1.5;
    margin-top: 20px;
    padding: 20px;

    a {
        color: ${({theme}) => theme.colors.secondary};
    }
`;

export const About = () => {
    return (
        <StyledAbout>
            <h2>What is PollCat.io?</h2>
            <p>From the folks that brought you straws for polls, PollCat.io is a whole new kind of animal. We’ve ditched the bloat of servers and relational tables for a sleek, serverless, agile solution that’s filled with enough buzz words to make any professional happy. </p>
            <p>But we’re not here for professionals. No, we’re here for the unbuttoned people of the world that have super important decisions to make. <a href="#">What should you have for dinner?</a> <a href="#">What’s the best movie ever made?</a> <a href="#">Which Super Smash Brothers game reigns supreme?</a> Find out the answers to those questions and more with PollCat.io.</p>
            <p>Like what you see? <a href="https://www.paypal.me/pollcatdotio" target="_blank">Buy us a beer</a> or just get back to asking the really important questions in life.</p> 
        </StyledAbout>
    );
};
