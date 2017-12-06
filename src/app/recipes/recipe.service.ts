import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';




export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test description',
      'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
      [new Ingredient('meat', 1), new Ingredient('bread', 2)]),
    new Recipe(
      'Another Test',
      'This is a test description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Spaghettata.JPG/270px-Spaghettata.JPG',
      [new Ingredient('lettuce', 2), new Ingredient('tomato', 3)])];



  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }


}
