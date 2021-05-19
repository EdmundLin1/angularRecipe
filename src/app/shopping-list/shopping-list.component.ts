import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Potatoes", 4),
    new Ingredient("Oil", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAfterAddIngredient(ingredientData: {ingredientName: string, ingredientAmount: number}){
    this.ingredients.push(new Ingredient(ingredientData.ingredientName, ingredientData.ingredientAmount));
  }

}
