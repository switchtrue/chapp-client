import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RoomInfo from './RoomInfo';
import {Link} from 'react-router';

export default React.createClass({
  render: function() {
    var rooms = this.props.rooms.map(function(room) {
      return (
        <Link to={`/rooms/${room.get('id')}`}>
          <RoomInfo id={room.get('id')}
            key={room.get('id')}
            name={room.get('name')}
            description={room.get('description')} />
        </Link>
      )
    });
    return (
      <div className="room-list">
        {rooms}
      </div>
    );
  }
});
