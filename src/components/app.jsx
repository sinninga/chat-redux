import React, { Component } from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

class App extends Component {
  render() {
    return (
      <div className="messaging-wrapper">
        <ChannelList />
        <MessageList />
      </div>
    );
  };
}

export default App;
