import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Recipe} from '../recipe.modal'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes!:Recipe[]
  
  constructor(public recipeservice:RecipeService,public route: ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipes()
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }

}
