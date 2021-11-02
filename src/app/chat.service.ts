import * as io from 'socket.io-client';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io.connect(this.url, {transports: ['websocket']});
    }

    public sendMessage(message) {
      this.socket.emit('new-message', message);
  }
}
