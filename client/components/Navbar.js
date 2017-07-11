import React, { Component } from 'react';
import NameEntry from './NameEntry';

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        {console.log('lets see what this is', this.props)}
        <h3># channelname goes here</h3>
        <NameEntry />
      </nav>
    );
  }
}
