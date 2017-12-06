// this component contains only the stuff needed in the root of the app

import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {HttpEvent} from '@angular/common/http';
import {Ingredient} from '../../shared/ingredient.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthAction from '../../auth/store/auth.actions';
import * as RecipesActions from '../../recipes/store/recipes.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService, private store: Store<fromApp.AppState>, private router: Router) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new RecipesActions.StoreRecipes());
    this.dataStorageService.storeShoppingList()
      .subscribe(
        (response: HttpEvent<Ingredient[]>) => {
          console.log(response);
        }
      );
  }

  onGetData() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
    this.dataStorageService.getShoppingList();
  }

  onLogout() {
    this.store.dispatch(new AuthAction.LogOut());
  }
}

