import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/AccountService';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers:[AccountService],
})
export class AccountsComponent implements OnInit {
  //accounts array
accounts:{name:string,status:string}[]=[
  // {
  //   name:'Savings account',
  //   status:'active'
  // },
  // {
  //   name:'Business account',
  //   status:'inactive'
  // },
  // {
  //   name:'Debit account',
  //   status:'active'
  // }

]
  constructor(private accountService:AccountService) { 
    this.accounts=this.accountService.accounts;
  }

  ngOnInit(): void {
  }
// onAccountAdded(newAccount:{name:string,status:string}){
//   this.accounts.push(newAccount);
// } just incase you try to understand commented code hope this helps:)!!{{dont need it anymore because push is happening in service}}
}
