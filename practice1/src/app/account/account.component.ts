import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import {AccountService } from '../'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]

})
export class AccountComponent implements OnInit {
  @Input() account!:{name:string,status:string}
  @Input() id!:number
constructor(private loggingService: LoggingService,private accountsService:AccountService) {}
  onSetTo(status:string){
    
  }

  ngOnInit(): void {
  }

}
