const connect = (socketUrl: string): WebSocket | null => {
    let ws;

    try {
        ws = new WebSocket(socketUrl);
    } catch (error) {
        console.error(`an error occurred establishing a WebSocket connection to ${socketUrl}`);
        // log to sentry?
        ws = null;
    }

    return ws;
};

const sendMessage = (socket: WebSocket, data: string | object): void => {
    socket.send(JSON.stringify(data));
};

export const WebSocketApi = {
    connect,
    sendMessage,
};
