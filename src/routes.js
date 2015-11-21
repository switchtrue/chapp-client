import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import {LobbyContainer} from './components/Lobby';
import {RoomContainer} from './components/Room';
import ActionTypes from './consts/ActionTypes';

export default (
  <Route component={App}>
    <Route path="/rooms/:id" component={RoomContainer} />
    <Route path="/" component={LobbyContainer} />
  </Route>
);
