// this component contains only the stuff needed in the root of the app

import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {HttpResponse} from '@angular/common/http';
import {Recipe} from '../../recipes/recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpResponse<Recipe[]>) => {
          console.log(response);
        }
      );
    this.dataStorageService.storeShoppingList()
      .subscribe(
        (response: HttpResponse<Ingredient[]>) => {
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

