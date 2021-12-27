import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.modal'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes!:Recipe[]
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  
  constructor(public recipeservice:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipes()
  }
  onRecipeSelected(recipe:Recipe): void {
    this.recipeWasSelected.emit(recipe)
  }

}
