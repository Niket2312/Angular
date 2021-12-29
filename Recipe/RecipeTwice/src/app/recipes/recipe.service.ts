import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService{
    selectedRecipe=new EventEmitter<Recipe>();
   private recipes:Recipe[]=[
        new Recipe('A taste Recipe','Simply a taste',
        'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90',
        [
            new Ingredient('French Fries',20),new Ingredient('Burger',1)
        ]),
        new Recipe('A taste Recipe2','Simply a taste2',
        'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90',
        [
            new Ingredient('French Fries',20),new Ingredient('Burger',1)
        ])
      ]
      getRecipes(){
          return this.recipes.slice()
      }
      getRecipe(index:number){
        return this.recipes[index]
      }
      
}