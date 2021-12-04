import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  firstName='';
  familyName='';
  countryName='';
  general='';
  @Output() dataCreated = new EventEmitter<{firstName: string; familyName: string,
    countryName: string}>();
    // @Output() genDataCreated=new EventEmitter<string>();
  onAdd(){
    // console.log(localRef)
    // console.log(localRef.value)
    this.dataCreated.emit({firstName: this.firstName, familyName: this.familyName,
      countryName:this.countryName}
      )
      console.log({firstName: this.firstName, familyName: this.familyName,
        countryName:this.countryName})
        // this.genDataCreated.emit(this.general);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
