import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',    // passing javascript object to this decorator
    //styleUrls: ['../app.component.css']       // referring to css in app component
    styles:[`
    .online{
        color: white;
    }
    `]
      
})
export class ServerComponent{
    serverId: number =10;
    serverStatus: string = 'offline';

    constructor(){
       this.serverStatus =Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'orange';
    }
}