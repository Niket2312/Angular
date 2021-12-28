import {Subject} from 'rxjs';
import { Injectable } from "@angular/core"
import { Ingredient } from '../shared/ingredient.modal';
import { Recipe } from "./recipe.modal"
@Injectable({
    providedIn:'root'
})
export class RecipeService{
    recipeSelected=new Subject<Recipe>();
   private recipes: Recipe[]=[
        new Recipe('A Test Recipe',
        'This is simply a Test Recipe',
        'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90',
        [new Ingredient('French fries',20),new Ingredient('pizza',20)]
        )
        
      ]
      getRecipes(){
          return this.recipes.slice()
      }
      getRecipe(index:number){
          return this.recipes[index];
      }
      
}