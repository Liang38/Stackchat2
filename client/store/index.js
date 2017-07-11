import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';
import name from './name';
import messages from './messages';
import channels from './channels';
import selectedChannel from './selectedChannel';

// INITIAL STATE

const initialState = {
	messages: [],
	name: 'Reggie',
	newMessageEntry: '',
	channels: [],
	newChannelEntry: '',
	selectedChannel: {}
};
const combineReducer = combineReducers({
	messages,
	name,
	channels,
	newChannelEntry,
	newMessageEntry,
	selectedChannel
});

const store = createStore(
	combineReducer,
	composeWithDevTools(applyMiddleware(
		thunkMiddleware,
		createLogger()
	))
);

export default store;
export * from './messages';
export * from './channels';
export * from './newChannelEntry';
export * from './newMessageEntry';
export * from './name';
export * from './selectedChannel';
