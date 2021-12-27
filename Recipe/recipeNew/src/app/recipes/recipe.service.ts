import { Injectable } from "@angular/core"
import { Recipe } from "./recipe.modal"
@Injectable({
    providedIn:'root'
})
export class RecipeService{
   private recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is simply a Test Recipe',
        'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90')
        
      ]
      getRecipes(){
          this.recipes.slice()
      }
}