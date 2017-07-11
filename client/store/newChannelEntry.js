
// ACTION TYPE
const WRITE_CHANNEL = 'WRITE_CHANNEL';

// ACTION CREATOR

export function writeChannel(content) {
    const action = { type: WRITE_CHANNEL, content };
    return action;
}

// REDUCER

export default function reducer(state = '', action) {

    switch (action.type) {
        case WRITE_CHANNEL:
            return action.content;
        default:
            return state;
    }
}
