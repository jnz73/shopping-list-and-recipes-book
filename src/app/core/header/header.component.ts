// this component contains only the stuff needed in the root of the app

import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {HttpEvent} from '@angular/common/http';
import {Ingredient} from '../../shared/ingredient.model';
import {AuthService} from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService, private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
    this.dataStorageService.storeShoppingList()
      .subscribe(
        (response: HttpEvent<Ingredient[]>) => {
          console.log(response);
        }
      );
  }

  onGetData() {
    this.dataStorageService.getRecipes();
    this.dataStorageService.getShoppingList();
  }

  onLogout() {
    this.authService.logOut();
  }
}

