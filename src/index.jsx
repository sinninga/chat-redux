// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [],
  channels: ["family", "friends", "work"],
  selectedChannel: "family",
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
}

const reducers = combineReducers({
  messages: messagesReducer,
  selectedMessage: selectedMessageReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
