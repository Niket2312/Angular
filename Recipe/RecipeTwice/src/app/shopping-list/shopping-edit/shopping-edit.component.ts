import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  subscription!: Subscription
  editedItemIndex!:number
  editedItem!:Ingredient
  @ViewChild('f') slForm!:NgForm
  editMode=false
  constructor(public shoppingListService: ShoppingListService) { }
  

  ngOnInit(): void {
    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index
        this.editMode=true  
        this.editedItem=this.shoppingListService.getIngredient2(index)
        this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})
      }
    )
  }
  onAddItem(form:any){
   
    const newIngredient=new Ingredient(form.name,form.amount)
    console.log(newIngredient);
    
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient)
    }
    else{
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode=false
    form.reset()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onClear(){
    this.slForm.reset()
    this.editMode=false
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
}
