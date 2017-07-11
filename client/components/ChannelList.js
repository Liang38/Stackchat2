import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!

class ChannelList extends Component {
	render() {
		const { messages, channels } = this.props;
		return (
			<ul>
				{
					channels.map(channel => {
						return (
							<li key={channel.id}>
								<NavLink to={`/channels/${channel.id}`} activeClassName="active">
									<span># {`${channel.name}`}</span>
									<span className="badge">{messages.filter(message => message.channelId === channel.id).length}</span>
								</NavLink>
							</li>
						);
					})
				}
				<li>
					<NavLink to="/new-channel">Create a channel...</NavLink>
				</li>
			</ul>
		);
	}
}

function mapStatetoProps(state) {
	return { messages: state.messages, channels: state.channels };
}
/** Write your `connect` component below! **/

const ChannelListContainer = withRouter(connect(mapStatetoProps)(ChannelList));

export default ChannelListContainer;
