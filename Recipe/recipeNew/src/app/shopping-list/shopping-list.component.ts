import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal'
import { ShoppingListService } from './shopping-list.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];
  private igChangeSub!:Subscription
  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients
      }
    )
  }

}
