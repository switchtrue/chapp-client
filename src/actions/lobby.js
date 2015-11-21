import ActionTypes from '../consts/ActionTypes';

export function setState(state) {
  return {
    type: ActionTypes.Lobby.setState,
    state
  };
}

export function createRoom(name, description, type, participants = []) {
  return {
    type: ActionTypes.Lobby.createRoom,
    payload: {
      name: name,
      description: description,
      type: type,
      participants: participants
    }
  };
}
