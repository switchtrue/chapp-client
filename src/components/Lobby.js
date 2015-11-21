import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PersonList from './PersonList';
import RoomList from './RoomList';
import RoomCreate from './RoomCreate';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/lobby';


export const Lobby = React.createClass({
  createRoom: function(name, description) {
    this.props.createRoom(
      name,
      description,
      'topic'
    );
  },
  render: function() {
    return (
      <div className="lobby">
        <header>
          <h1>Lobby</h1>
        </header>
        <div className="lobby-content-container">
          <div className="person-list-container">
            <h2>People</h2>
            <PersonList people={this.props.availablePeople} />
          </div>
          <div className="room-list-container">
            <h2>Rooms</h2>
            <RoomList rooms={this.props.availableRooms} />
            <RoomCreate createRoom={this.createRoom} />
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    availablePeople: state.get('availablePeople'),
    availableRooms: state.get('availableRooms')
  };
}

export const LobbyContainer = connect(
  mapStateToProps,
  actionCreators
)(Lobby);
