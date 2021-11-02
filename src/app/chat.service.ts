import { BehaviorSubject, Observable } from 'rxjs';
import * as io from 'socket.io-client';




export class ChatService {
    private url = 'http://localhost:3000';
    private socket;
    // private _messages$ = new BehaviorSubject<string>(null);
    // get messages$(): Observable<string> {
    //   return this._messages$.asObservable();
    // }

    constructor() {
      this.socket = io.connect(this.url, { transports: ['websocket'] });
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

    public getMessages = () => {
      return Observable.create((observer) => {
        console.log('huh?')
          this.socket.on('new-message', (message) => {

              observer.next(message);
          });
      });
  }
}
