import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {HttpResponse} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpResponse<Recipe[]>) => {
          console.log(response);
        }
      );
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }
}

