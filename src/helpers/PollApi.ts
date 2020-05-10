import axios, {AxiosResponse} from 'axios';
import { Urls } from '../Urls';
import {
    NewPoll,
    Poll,
} from '../models/Poll';
import { Vote } from '../models/Vote';

const getPollByPollId: (pollId: string) => Promise<AxiosResponse<Poll>> = (pollId) =>
    axios.get(`${Urls.getPollUrl}/${pollId}`);

const postVote: (vote: Vote) => Promise<AxiosResponse<any>> = (vote) =>
    axios.post(Urls.postVoteUrl, vote, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

const postPoll: (poll: NewPoll) => Promise<AxiosResponse<any>> = (poll) =>
    axios.post(Urls.postPollUrl, poll, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

export const PollApi = {
    getPollByPollId,
    postVote,
    postPoll,
};
