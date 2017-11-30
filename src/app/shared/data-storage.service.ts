import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Ingredient} from './ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private slService: ShoppingListService) {
  }

  storeRecipes() {
    return this.http.put('https://ng-recipe-boo.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get<Recipe[]>('https://ng-recipe-boo.firebaseio.com/recipes.json')
      .map(
        (data) => {
          const recipes: Recipe[] = data;
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  storeShoppingList() {
    return this.http.put('https://ng-recipe-boo.firebaseio.com/shopping-list.json', this.slService.getIngredients());
  }

  getShoppingList() {
    return this.http.get<Ingredient[]>('https://ng-recipe-boo.firebaseio.com/shopping-list.json')
      .subscribe(
        (data) => {
          this.slService.setIngredients(data);
        }
      );
  }


}
