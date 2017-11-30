import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Ingredient} from './ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private slService: ShoppingListService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-boo.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get<Recipe[]>('https://ng-recipe-boo.firebaseio.com/recipes.json?auth=' + token)
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
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-boo.firebaseio.com/shopping-list.json?auth=' + token, this.slService.getIngredients());
  }

  getShoppingList() {
    const token = this.authService.getToken();

    return this.http.get<Ingredient[]>('https://ng-recipe-boo.firebaseio.com/shopping-list.json?auth=' + token)
      .subscribe(
        (data) => {
          this.slService.setIngredients(data);
        }
      );
  }


}
