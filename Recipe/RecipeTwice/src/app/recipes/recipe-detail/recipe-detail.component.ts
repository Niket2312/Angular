import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe!:Recipe
id!:number
  constructor(public shoppinglistservice:ShoppingListService,public recipeservice:RecipeService, public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id=+params['id']
        this.recipe=this.recipeservice.getRecipe(this.id)
      }
    )
  }
  onAddToShoppingList(){
    this.shoppinglistservice.getIngredinent(this.recipe.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
}
