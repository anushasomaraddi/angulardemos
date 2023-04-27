import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    }
    serverId:number=1;
    serverName:string='server';
    serverStatus:string='offline';
    isServerEnabled:boolean=false;
    serverDescription:string='Init Description';
    status:String='On';
    getServerStatus(){
      return this.serverStatus;
  }
  getButtonstatustatus(){
    return this.status;
}
onPowerButtonClick(){
  if(this.serverStatus=='offline'){
    this.serverStatus='online';
    this.status='off';
    
  }else if(this.serverStatus=='online'){
    this.serverStatus='offline';
    this.status='on';
   
  }
  
}
onUpdateServerName(event:any){
  //let value=event.target.value  //target is nothing but input field in this case
  //console.log(value);
  this.serverName=event.target.value;
}
   getServerColour(){
    return this.serverStatus=='online'?'green':'tomato';

   }
   getServerClass(){
    return this.serverStatus=='online'?'btn-success':'btn-warning';
   }
}
