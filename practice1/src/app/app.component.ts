import { Component,OnInit,ViewChild } from '@angular/core';
import { AccountsService } from './new-account/accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  title = 'practice1';
  accounts:{name:string,status:string}[]=[];
  constructor(private accountsService:AccountsService){}
  ngOnInit() {
    this.accounts=this.accountsService.accounts
  }

 }

