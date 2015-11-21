import React from 'react';
import {Router} from 'react-router';
import routes from '../routes';

const AppRouter = React.createClass({
  render: function() {
    return (
      <Router {...this.props}>
        {routes}
      </Router>
    );
  }
});

export default AppRouter;
