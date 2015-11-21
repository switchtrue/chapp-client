import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  sendMessage: function() {
    var message = this.refs.messageText.value.trim();
    this.refs.messageText.value = '';
    if (message !== '') {
      this.props.handleSendMessage(this.props.roomId, message);
    }
  },
  onSubmitSendMessage: function(e) {
    e.preventDefault();
    this.sendMessage();
  },
  onKeyDownSendMessage: function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      this.sendMessage();
    }
  },
  render: function() {
    return (
      <div className="new-message">
        <form onSubmit={this.onSubmitSendMessage}>
          <textarea type="text"
            ref="messageText"
            placeholder="Type a message..."
            onKeyDown={this.onKeyDownSendMessage}></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
});
