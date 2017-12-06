import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {HttpClient, HttpRequest} from '@angular/common/http';

import * as RecipesActions from '../store/recipes.actions';
import * as fromRecipes from '../store/recipes.reducers';
import {Recipe} from '../recipe.model';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipesEffects {

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipesActions.FETCH_RECIPES)
    .switchMap((action: RecipesActions.FetchRecipes) => {
      return this.http.get<Recipe[]>('https://ng-recipe-boo.firebaseio.com/recipes.json',
        {
          // params: new HttpParams().set('auth', token)
          observe: 'body',
          responseType: 'json'
        });
    })
    .map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipesActions.SET_RECIPES,
          payload: recipes
        };
      });
  @Effect({dispatch: false})
  recipesStore = this.actions$
    .ofType(RecipesActions.STORE_RECIPES)
    // withLatestFrom combines the action with another observable in this case the state
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://ng-recipe-boo.firebaseio.com/recipes.json', state.recipes,
        {
          reportProgress: true,
        });
      return this.http.request(req);
    });


  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromRecipes.FeatureState>) {
  }
}
