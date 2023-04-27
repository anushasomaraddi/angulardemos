import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
servers=[
  {
      serverSize:'medium',
      name:'Production Server',
      status:'stable',
      started:new Date('2023-04-20'),
    

  },
  {
    serverSize:'small',
    name:'Database Server',
    status:'stable',
    started:new Date('2023-04-28'),
  

},
{
  serverSize:'medium',
  name:'Development Server',
  status:'offline',
  started:new Date('2021-02-05'),


},
{
  serverSize:'small',
  name:'QA Server',
  status:'critical',
  started:new Date('2022-09-09'),


},
];
filteredStatus='';

getStatusClass(server){
  return{
    'list-group-item-success':server.status==='stable',
    'list-group-item-warning':server.status==='offline',
    'list-group-item-danger':server.status==='critical',
  };
}
}
