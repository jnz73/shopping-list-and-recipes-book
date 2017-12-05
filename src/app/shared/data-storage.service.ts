import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Ingredient} from './ingredient.model';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {HttpClient, HttpRequest} from '@angular/common/http';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import {Store} from '@ngrx/store';


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private store: Store<fromApp.AppState>) {
  }

  storeRecipes() {
    // const token = this.authService.getToken();

    // return this.http.put('https://ng-recipe-boo.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: new HttpHeaders().set('', '')
    //   });
    const req = new HttpRequest('PUT', 'https://ng-recipe-boo.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
      {
        reportProgress: true,
        // params: new HttpParams().set('auth', token)
      });
    return this.http.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();

    return this.http.get<Recipe[]>('https://ng-recipe-boo.firebaseio.com/recipes.json',
      {
        // params: new HttpParams().set('auth', token)
      })
      .map(
        (recipes) => {
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
    // const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-boo.firebaseio.com/shopping-list.json',
      this.store.dispatch(new ShoppingListActions.ReturnIngredients())
    );
  }

  getShoppingList() {
    // const token = this.authService.getToken();

    return this.http.get<Ingredient[]>('https://ng-recipe-boo.firebaseio.com/shopping-list.json')
      .subscribe(
        (ingredients) => {
          this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
        }
      );
  }


}
