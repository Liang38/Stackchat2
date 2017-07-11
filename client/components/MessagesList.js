import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import { connect } from 'react-redux';
import { fetchChannel } from '../store';
import { withRouter } from 'react-router';

class Messages extends Component {
	componentDidMount() {
		this.props.selectChannel(Number(this.props.match.params.channelId));
	}

	componentWillReceiveProps(nextProps) {
		const newChannelId = nextProps.match.params.channelId;
		if (Number(this.props.match.params.channelId) !== newChannelId) {
			this.props.selectChannel(newChannelId);
		}
	}

	render() {
		const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
		const messages = this.props.messages;
		const filteredMessages = messages.filter(message => message.channelId === channelId);

		return (
			<div>
				<ul className="media-list">
					{filteredMessages.map(message => <Message message={message} key={message.id} />)}
				</ul>
				<NewMessageEntry channelId={channelId} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { messages: state.messages };
}

function mapDispatchToProps(dispatch) {
	return {
		selectChannel: function (channelId) {
			dispatch(fetchChannel(channelId));
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages));
