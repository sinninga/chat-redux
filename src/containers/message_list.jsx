import React, { Component } from 'react';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <Message />
      </div>
    );
  };
}

export default MessageList;
