import { Component,Output, OnInit,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A Test recipe','A simple recipe','https://depositphotos.com/173034766/stock-photo-woman-writing-down-recipe.html')
  ];

  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe)
}
}
