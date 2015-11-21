import React from 'react';
import ReactDOM from 'react-dom';
import { chappReducer } from './reducer';
import { combineReducers, compose, createStore } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import {persistState} from 'redux-devtools';
import DevTools from './containers/DevTools';
import Root from './containers/Root';
import INITIAL_STATE from './data/initialstate';
import { fromJS } from 'immutable';
import routes from './routes';

require('./css/reset.css');
require('./css/style.css');

const finalCreateStore = compose(
  reduxReactRouter({
    routes,
    createHistory
  }),
  // Provides support for DevTools:
  DevTools.instrument(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const reducer = combineReducers({
  router: routerStateReducer,
  chapp: chappReducer
});

const store = finalCreateStore(reducer, INITIAL_STATE);

ReactDOM.render(
  <Root store={store} routes={routes} />,
  document.getElementById('root')
);
