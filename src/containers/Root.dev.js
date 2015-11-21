import React from 'react';
import {Provider} from 'react-redux';
import Router from '../components/Router';
import DevTools from './DevTools';

export default React.createClass({
  render: function() {
    const {store} = this.props;
    const {routes} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router>{routes}</Router>
          <DevTools />
        </div>
      </Provider>
    )
  }
})
