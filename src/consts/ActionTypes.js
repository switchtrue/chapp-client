import keyMirror from 'fbjs/lib/keyMirror';

export default {

  Lobby: keyMirror({
    setState: null,
    createRoom: null
  }),

  Room: keyMirror({
    enterRoom: null,
    leaveRoom: null,
    sendMessage: null
  })
};
