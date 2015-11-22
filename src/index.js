import React from 'react';
import ReactDOM from 'react-dom';
import { chappReducer } from './reducer';
import { combineReducers, compose, createStore } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import {persistState} from 'redux-devtools';
import DevTools from './containers/DevTools';
import Root from './containers/Root';
import { fromJS } from 'immutable';
import routes from './routes';
import 'isomorphic-fetch';

require('./css/reset.css');
require('./css/style.css');

var gqlInitialQuery = `
{
  availableRooms: allRooms {
    id,
    name,
    type,
    description,
    participants {
      id,
      name
    }
  },
  availablePeople: allPeople {
    id,
    name,
    email
  }
}
`;

fetch('http://localhost:3000/graphql?query=' + encodeURI(gqlInitialQuery))
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  })
  .then(function(initialState) {
    const store = finalCreateStore(reducer, {
      chapp: fromJS({
        'user': {
          'id': '1',
          'name': 'Mike Leonard'
        },
        availableRooms: initialState.data.availableRooms,
        availablePeople: initialState.data.availablePeople
      })
    });

    ReactDOM.render(
      <Root store={store} routes={routes} />,
      document.getElementById('root')
    );

  });

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
