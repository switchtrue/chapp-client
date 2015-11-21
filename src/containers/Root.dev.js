import React from 'react';
import {Provider} from 'react-redux';
import Router from '../components/Router';
import DevTools from './DevTools';
import { ReduxRouter } from 'redux-router';

export default React.createClass({
  render: function() {
    const {store} = this.props;
    const {routes} = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            <Router>{routes}</Router>
          </ReduxRouter>
          <DevTools />
        </div>
      </Provider>
    )
  }
})
