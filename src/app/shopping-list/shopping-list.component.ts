import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 7)
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);

  }

}
