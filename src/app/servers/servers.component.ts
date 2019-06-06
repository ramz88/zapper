import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',                              // Default selector
  //selector: '[app-servers]',                         // passing selector as an attribute that can be used in div class
  //selector: `.app-servers`,                         // passing selector as a class, can be used in div
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>',         // this is inline html refering to server component
  styleUrls: ['./servers.component.css'],
  styles:[`.displayText{
    color: white;
  }
  `]
})
export class ServersComponent implements OnInit {
allowNewServer = false;
ServerCreationStatus = 'No server was created !!';
serverName ='Test Server';
serverCreated = false;
userName = '';
assignmentCheck = false;
servers = ['Testserver', 'Testserver2'];
dontDisplay= false;
display_button= [];
date = Date.toString();
display_array_length: number;

  constructor() { 
    setTimeout(() => {    //ES6 format of using arrow function 
      this.allowNewServer = true;
    },2000);
  }

  onClearInput(){
    this.userName = '';
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.ServerCreationStatus= 'server was created !!  ' + this.serverName;
    console.log("server created");
  }

  onUpdateServerName(event: Event){
    console.log("event for Server Updated");
    this.serverName = (<HTMLInputElement>event.target).value; 
    // since event.target value comes from HTML input, we are casting it by explicitly specifying that 'value' part of HTLM Input element
  }

  onToggle(){
    this.display_button.push(new Date().toLocaleString());
    if (this.dontDisplay === true){
      return this.dontDisplay = false;
    }else
    return this.dontDisplay = true;
  }

  ngOnInit() {
  }

}
