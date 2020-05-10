const siteRootUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.pollcat.io';
const baseApiUrl = 'https://api.pollcat.io/v1';
const getPollUrl = `${baseApiUrl}/poll`;
const postPollUrl = `${baseApiUrl}/poll`;
const postVoteUrl = `${baseApiUrl}/vote`;
const webSocketUrl = `wss://f2h6rqdqgb.execute-api.us-east-1.amazonaws.com/v1`;

export const Urls = {
    siteRootUrl,
    baseApiUrl,
    getPollUrl,
    postPollUrl,
    postVoteUrl,
    webSocketUrl,
};
