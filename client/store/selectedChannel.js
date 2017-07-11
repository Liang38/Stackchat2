import axios from 'axios';

// ACTION TYPE
const SELECT_CHANNEL = 'SELECT_CHANNEL';

// ACTION CREATOR

export function selectChannel(channel) {
	const action = { type: SELECT_CHANNEL, channel };
	return action;
}

// THUNK

export function fetchChannel(channelId) {

	return function thunk(dispatch) {
		return axios.get(`/api/channels/${channelId}`)
			.then(res => res.data)
			.then(channel => {
				const action = selectChannel(channel);
				dispatch(action);
			});
	};
}

// REDUCER

export default function reducer(state = {}, action) {
	switch (action.type) {
		case SELECT_CHANNEL:
			return action.channel;
		default:
			return state;
	}
}
