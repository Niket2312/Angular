import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe!: Recipe;
  id!: number;
  constructor(public route:ActivatedRoute, public router:Router,public recipeservice: RecipeService,public shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id']
        this.recipe=this.recipeservice.getRecipe(this.id)
      }
    )
  }
  onAddToShoppingList(){

    this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
