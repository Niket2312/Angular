import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(nameInput:any,amountInput:any){
    this.shoppingListService.addIngredients(nameInput, amountInput)
  }

}
