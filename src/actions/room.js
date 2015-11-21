import ActionTypes from '../consts/ActionTypes';

export function enterRoom(id) {
  return {
    type: ActionTypes.Room.enterRoom,
    payload: {
      roomId: id
    }
  };
}

export function leaveRoom() {
  return {
    type: ActionTypes.Room.leaveRoom
  };
}

export function sendMessage(roomId, author, message) {
  return {
    type: ActionTypes.Room.sendMessage,
    payload: {
      roomId: roomId,
      author: author,
      message: message
    }
  };
}
