import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <p className="author">{this.props.message.author}</p>
        <p>{this.props.message.content}</p>
      </div>
    );
  };
}

export default Message;
