import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='No server was created';
serverName='test';
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created! Name is'+this.serverName
  }
  onUpdateServer(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
    console.log(this.serverName)
  }

}
