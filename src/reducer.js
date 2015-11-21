import {List, Map, fromJS} from 'immutable';
import ActionTypes from './consts/ActionTypes';

function generateId() {
  return String(parseInt(new Date() / 1000));
}

function setState(state, newState) {
  console.log('setting state');
  return state.merge(newState);
}

function createRoom(state, newRoom) {
  var newRoomWithId = newRoom;
  newRoomWithI._id = generateId();
  const currentAvailableRooms = state.get('availableRooms');
  const newAvailableRooms = currentAvailableRooms.push(fromJS(newRoomWithId));
  var newState = state.set('availableRooms', newAvailableRooms);
  return newState;
}

function enterRoom(state, roomId) {
  return state.set('currentRoomId', roomId);
}

function leaveRoom(state) {
  return state.delete('currentRoom');
}

function sendMessage(state, roomId, author, message) {
  const availableRooms = state.get('availableRooms');

  const newRooms = availableRooms.update(
    availableRooms.findIndex(function(item) {
      return item.get('_id') === roomId;
    }), function(item) {
      if (item.get('messages') === undefined) {
        return item.set('messages', new List([new Map({author: author, message: message, date: new Date()})]));
      } else {
        const currentMessages = item.get('messages');
        const newMessages = currentMessages.push(new Map({author: author, message: message, date: new Date()}));
        return item.set('messages', newMessages);
      }
    }
  );

  return state.set('availableRooms', newRooms);
}

export function chappReducer(state = Map(), action) {
  switch (action.type) {
    case ActionTypes.Lobby.setState:
      return setState(state, action.state);
    case ActionTypes.Lobby.createRoom:
      return createRoom(state, action.payload);
    case ActionTypes.Room.enterRoom:
      return enterRoom(state, action.payload.roomId);
    case ActionTypes.Room.leaveRoom:
      return leaveRoom(state);
    case ActionTypes.Room.sendMessage:
      return sendMessage(state, action.payload.roomId, action.payload.author, action.payload.message);
  }
  return state;
}
