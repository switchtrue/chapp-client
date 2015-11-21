import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  render: function() {
    return (
      <div className="person-info">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
});
