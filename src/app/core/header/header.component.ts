// this component contains only the stuff needed in the root of the app

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthAction from '../../auth/store/auth.actions';
import * as RecipesActions from '../../recipes/store/recipes.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new RecipesActions.StoreRecipes());
    this.store.dispatch(new ShoppingListActions.StoreIngredients());
  }

  onGetData() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
    this.store.dispatch(new ShoppingListActions.FetchIngredients());
  }

  onLogout() {
    this.store.dispatch(new AuthAction.LogOut());
  }
}

