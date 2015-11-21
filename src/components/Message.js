import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  render: function() {
    return (
      <div className="message">
        {this.props.text}
      </div>
    );
  }
});
