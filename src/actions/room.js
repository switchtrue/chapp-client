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

export function sendMessage(roomId, message) {
  return {
    type: ActionTypes.Room.sendMessage,
    payload: {
      roomId: roomId,
      message: message
    }
  };
}
