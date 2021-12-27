import { Component, OnInit, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ingredientAdded=new EventEmitter<{name:string,amount:number}>()
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(nameInput:any,amountInput:any){
    this.ingredientAdded.emit({name:nameInput,amount:amountInput})     
  }

}
