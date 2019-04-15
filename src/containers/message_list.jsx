import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {

  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message) => {
          return <Message key={message.author} message={message} />;
        })}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
