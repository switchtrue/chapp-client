import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/room';
import RoomInfo from './RoomInfo';
import PersonList from './PersonList';
import {Link} from 'react-router';
import {fromJS, List} from 'immutable';
import NewMessage from './NewMessage';
import Message from './Message';

export const Room = React.createClass({
  componentDidMount: function() {
    this.props.enterRoom(this.props.params.id);
  },

  componentWillUnmount: function() {
    this.props.leaveRoom();
  },

  // getCurrentRoom: function() {
  //   const availableRooms = this.props.availableRooms.toJS();
  //   for (var i in availableRooms) {
  //     var room = availableRooms[i];
  //     if (room._id === this.props.currentRoomId) {
  //       return fromJS(room);
  //     }
  //   }
  //   return undefined;
  // },

  renderMessages: function() {
    // console.log('***');
    // console.log(this.props.messages);
    if (this.props.messages.size === 0) {
      return '<li>No messages yet, say something!</li>';
    } else {
      var messages = '';
      this.props.messages.map((message) => {
        // console.log('message:');
        // console.log(message);
        messages += '<li key=${message}>' + message + '</li>';
      });
      return messages;
    }
  },

  render: function() {
    console.log('rendering');
    var messages = this.props.messages.map(function(message) {
      console.log(message);
      return (
        <li key={message}>
          <Message text={message}/>
        </li>
      )
    });
    return (
      (this.props.currentRoomId === undefined) ?
      <h1>Loading...</h1> :
      <div className="room">
        <header>
          <div className="breadcrumb-container">
            <Link to={`/`} className="breadcrumb">Lobby</Link>
          </div>
          <RoomInfo id={this.props.currentRoom.get('_id')}
            name={this.props.currentRoom.get('name')}
            description={this.props.currentRoom.get('description')} />
        </header>
        <div className="room-content-container">
          <div className="participants-container">
            <h2>Participants</h2>
            <PersonList people={this.props.currentRoom.get('participants')} />
          </div>
          <div className="chat-container">
            <h2>Conversation</h2>
            <div className="messages-container">
              <ul>
                {messages}
              </ul>
            </div>
            <NewMessage roomId={this.props.currentRoomId} handleSendMessage={this.props.sendMessage}/>
          </div>
        </div>
      </div>
    );
  }
});


function mapStateToProps(state) {
  const room = state.get('availableRooms').find(function(item) {
    return (item.get('_id') === state.get('currentRoomId'));
  });

  const messages = (room === undefined) ? new List(['No messages']) : new List(room.get('messages'));

  return {
    currentRoomId: state.get('currentRoomId'),
    currentRoom: room,
    messages: messages
  };
}


export const RoomContainer = connect(
  mapStateToProps,
  actionCreators
)(Room);
