import React from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store';

function NewChannelEntry(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Create a Channel</label>
				<input className="form-control" type="text" name="channelName" onChange={props.handleChange} placeholder="Enter channel name" value={props.newChannelEntry} />
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-default">Create Channel</button>
			</div>
		</form>
	);
}

function mapStateToProps(state) {
	return {
		newChannelEntry: state.newChannelEntry
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		handleChange: function (event) {
			dispatch(writeChannel(event.target.value));
		},
		handleSubmit: function (event) {
			event.preventDefault();
			dispatch(postChannel({ name: event.target.channelName.value }, ownProps.history));
			dispatch(writeChannel(''));
		}
	};
}

/** Write your `connect` component below! **/
export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
