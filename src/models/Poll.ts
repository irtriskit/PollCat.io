import { PollOption } from './PollOption';
import { PollConfig } from './PollConfig';

export interface Poll {
    pollid: string,
    data: PollData,
}

export interface PollResponse {
    pollid: string,
    data: string,
}

export interface PollResponseError {
    message: string,
}

export interface PollData {
    title: string,
    options: Array<PollOption>,
    config: PollConfig,
}

export interface NewPoll {
    title: string,
    options: Array<PollOption>,
    config: PollConfig,
}
