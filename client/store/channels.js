import axios from 'axios';
import socket from '../socket';


// ACTION TYPE
const GET_CHANNELS = 'GET_CHANNELS';
const CREATE_CHANNEL = 'CREATE_CHANNEL';

// ACTION CREATOR

export function getChannels(channels) {
    const action = { type: GET_CHANNELS, channels };
    return action;
}

export function createChannel(channel) {
    const action = { type: CREATE_CHANNEL, channel };
    return action;
}


// THUNK CREATORS


export function fetchChannels() {

    return function thunk(dispatch) {
        return axios.get('/api/channels')
            .then(res => res.data)
            .then(channels => {
                const action = getChannels(channels);
                dispatch(action);
            })
    }
}

export function postChannel(channel, history) {

    return function thunk(dispatch) {
        return axios.post('/api/channels', channel)
            .then(res => res.data)
            .then(newChannel => {
                const action = createChannel(newChannel);
                dispatch(action);
                socket.emit('new-channel', newChannel);
                history.push(`/channels/${newChannel.id}`);
            });
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CHANNELS:
            return action.channels

        case CREATE_CHANNEL:
            return [...state, action.channel]
        default:
            return state;
    }
}
