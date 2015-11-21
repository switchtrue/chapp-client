import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/room';
import RoomInfo from './RoomInfo';
import PersonList from './PersonList';
import {Link} from 'react-router';
import {fromJS, List, Map} from 'immutable';
import NewMessage from './NewMessage';
import Message from './Message';

export const Room = React.createClass({
  componentDidMount: function() {
    this.props.enterRoom(this.props.params.id);
  },

  componentWillUnmount: function() {
    this.props.leaveRoom();
  },

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
    var messages = this.props.messages.map(function(message) {
      return (
        <li key={message}>
          <Message message={message} />
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
            <NewMessage roomId={this.props.currentRoomId}
              handleSendMessage={this.props.sendMessage}
              author={this.props.user}/>
          </div>
        </div>
      </div>
    );
  }
});


function mapStateToProps(state) {
  const room = state.chapp.get('availableRooms').find(function(item) {
    return (item.get('_id') === state.chapp.get('currentRoomId'));
  });

  let messages;
  if (room === undefined || room.get('messages') === undefined) {
    messages = new List([new Map({
      author: 'Chapp',
      message: 'Welcome! There are no messages yet, why dont you start the conversation.',
      date: new Date()
    })]);
  } else {
    messages = room.get('messages')
  }

  return {
    currentRoomId: state.chapp.get('currentRoomId'),
    currentRoom: room,
    messages: messages,
    user: state.chapp.get('user')
  };
}


export const RoomContainer = connect(
  mapStateToProps,
  actionCreators
)(Room);
