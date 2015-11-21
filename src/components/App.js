import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import React from 'react';
import {fromJS, List, Map} from 'immutable';

export const App = React.createClass({
  render: function() {
    return this.props.children;
  }
});

connect(
  // Use a selector to subscribe to state
  state => (new Map({ q: state.router.location.query.q })),

  // Use an action creator for navigation
  { pushState }
)(App);

export default App;
