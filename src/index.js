import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {compose, createStore} from 'redux';
import {persistState} from 'redux-devtools';
import DevTools from './containers/DevTools';
import Root from './containers/Root';
import INITIAL_STATE from './data/initialstate';
import {fromJS} from 'immutable';

require('./css/reset.css');
require('./css/style.css');

const finalCreateStore = compose(
  // Provides support for DevTools:
  DevTools.instrument(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reducer, fromJS(INITIAL_STATE));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
