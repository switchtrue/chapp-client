import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  createRoom: function() {
    this.props.createRoom(
      this.refs.newRoomName.value.trim(),
      this.refs.newRoomDescription.value.trim()
    );
    this.refs.newRoomName.value = '';
    this.refs.newRoomDescription.value = '';
  },
  onSubmitCreateRoom: function(e) {
    this.createRoom();
    e.preventDefault();
  },
  render: function() {
    return (
      <div className="new-room-form">
        <h1>Create New Room</h1>
        <form onSubmit={this.onSubmitCreateRoom}>
          <input placeholder="Room Name" ref="newRoomName" />
          <input placeholder="Description" ref="newRoomDescription" />
          <input type="submit" value="Create Room" />
        </form>
      </div>
    );
  }
});
