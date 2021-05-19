import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe One', 'This is a test First one', 
    'https://niketalk.com/attachments/0336c32c-5077-4d25-a938-9b6aa998e353-jpeg.2784849/'),
    new Recipe('Test Recipe Two', 'This is a test Second one', 
    'https://niketalk.com/attachments/0336c32c-5077-4d25-a938-9b6aa998e353-jpeg.2784849/')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
