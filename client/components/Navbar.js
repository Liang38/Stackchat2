import React, { Component } from 'react';
import NameEntry from './NameEntry';
import { connect } from 'react-redux';

class Navbar extends Component {
	render() {
		return (
			<nav>
				{console.log('lets see what this is', this.props)}
				<h3># {this.props.channel && this.props.channel.name}</h3>
				<NameEntry />
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { channel: state.selectedChannel };
}

export default connect(mapStateToProps)(Navbar);
