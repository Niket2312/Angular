import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs'
export class ShoppingListService{
    startedEditing=new Subject<number>()

    ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Mangoes',10)
      ];
      getIngredients(){
          return this.ingredients
      }
      addIngredient(newIngredient:Ingredient){
          console.log(newIngredient);
          
          this.ingredients.push(newIngredient);
      }
      getIngredinent(ingredients:Ingredient[]){
         this.ingredients.push(...ingredients)
      }
      getIngredient2(index:number){
          return this.ingredients[index]
      }
      updateIngredient(index:number,newIngredient:Ingredient){
          this.ingredients[index]=newIngredient
      }
      deleteIngredient(index:number){
          this.ingredients.splice(index,1)
      }
}