import React, { Component } from 'react';
import MessageList from '../containers/message_list';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MessageList />
      </div>
    );
  };
}

export default App;
