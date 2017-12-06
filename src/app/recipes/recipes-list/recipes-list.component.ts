import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRecipes from '../store/recipes.reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  recipesState: Observable<fromRecipes.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipes.FeatureState>) {
  }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');

  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
