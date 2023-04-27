import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css'],
 
})
export class NewaccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  // @Output()
  // accountAdded=new EventEmitter<{name:string;status:string}>();
  onCreateAccount(accountName:string,accountStatus:string){
    //this.accountAdded.emit({name:accountName,status:accountStatus});
    this.accountService.addAccount(accountName,accountStatus);
  }
}
