// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messages from '../src/messages'

// State and reducers
const initialState = {
  messages: messages,
  channels: ["family", "friends", "work"],
  selectedChannel: "family",
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
}

import messagesReducer from './reducers/messages_reducer';
import selectedMessageReducer from './reducers/selected_message_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer';


const reducers = combineReducers({
  messages: messagesReducer,
  selectedMessage: selectedMessageReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
