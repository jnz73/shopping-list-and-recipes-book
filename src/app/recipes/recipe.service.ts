import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipesSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test description',
      'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
      [new Ingredient('meat', 1), new Ingredient('bread', 2)]),
    new Recipe(
      'Another Test',
      'This is a test description',
      'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
      [new Ingredient('lettuce', 2), new Ingredient('tomato', 3)])];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }


}
