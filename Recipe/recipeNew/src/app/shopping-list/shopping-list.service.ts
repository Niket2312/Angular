import {Injectable} from '@angular/core'
import { Ingredient } from '../shared/ingredient.modal';
import { Subject } from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>()
    ingredients: Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
      getIngredients(){
          return this.ingredients.slice()
      }
      addIngredients(nameInput: Ingredient,amountInput:Ingredient){
          this.ingredients.push(nameInput,amountInput);
          this.ingredientsChanged.next(this.ingredients.slice())
      }
      addIngredientsToShoppingList(ingredient:Ingredient[]){
          this.ingredients.push(...ingredient);
          this.ingredientsChanged.next(this.ingredients.slice())
      }
}