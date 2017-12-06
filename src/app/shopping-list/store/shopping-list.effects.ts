import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

import * as ShoppingListActions from './shopping-list.actions';
import * as  fromShoppingList from './shopping-list.reducers';
import {Ingredient} from '../../shared/ingredient.model';
import {Store} from '@ngrx/store';


@Injectable()
export class ShoppingListEffects {

  @Effect()
  ingredientsFetch = this.actions$
    .ofType(ShoppingListActions.FETCH_INGREDIENTS)
    .switchMap(() => {
      return this.http.get<Ingredient[]>('https://ng-recipe-boo.firebaseio.com/shopping-list.json')
        .map((ingredients) => {
          this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
        });
    });

  @Effect({dispatch: false})
  ingredientsStore = this.actions$
    .ofType(ShoppingListActions.STORE_INGREDIENTS)
    .withLatestFrom(this.store.select('ingredients'))
    .switchMap(([action, state]) => {
      return this.http.put('https://ng-recipe-boo.firebaseio.com/shopping-list.json',
        this.store.dispatch(new ShoppingListActions.ReturnIngredients())
      );
    });


  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromShoppingList.State>) {
  }
}
