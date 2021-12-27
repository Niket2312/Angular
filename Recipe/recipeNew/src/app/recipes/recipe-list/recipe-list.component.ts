import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.modal'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a Test Recipe',
    'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90')
    
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe): void {
    this.recipeWasSelected.emit(recipe)
  }

}
