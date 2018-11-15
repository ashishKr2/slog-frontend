import {HttpClient} from "@angular/common/http";
import { Injectable} from '@angular/core';
import { Observable} from 'rxjs/observable';
import * as socketIO from 'socket.io-client';

@Injectable()
export class ChatserviceProvider
{

    private socket=socketIO("http://localhost:3000");
    constructor (public http:HttpClient){}
    sendMessage(data)
    {
        this.socket.emit('newMessage',data);
    }

    newMessageRecieved()
    {
        let observable=new Observable(Observer =>{
            this.socket.on('newMessage',data=>
            {
                Observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            }
        });
        return observable;
    }
}