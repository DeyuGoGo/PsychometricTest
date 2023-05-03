import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render() {
    return (
      <div>
        {this.props.name ? `Welcome, ${this.props.name}!` : 'Welcome, guest!'}
      </div>
    );
  }
}

export default WelcomeMessage;