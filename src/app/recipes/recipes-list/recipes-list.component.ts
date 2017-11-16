import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test', 'This is a test description', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recipe('Another Test', 'This is a test description', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')];
    

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
