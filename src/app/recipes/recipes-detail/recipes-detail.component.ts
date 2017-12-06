import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import {Observable} from 'rxjs/Observable';
import * as fromRecipes from '../store/recipes.reducers';
import * as RecipesActions from '../store/recipes.actions';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesDetailComponent implements OnInit {
  recipeState: Observable<fromRecipes.State>;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router,
              private store: Store<fromRecipes.FeatureState>) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeState = this.store.select('recipes');
      }
    );
  }

  onAddToShoppingList() {
    this.store.select('recipes')
      .take(1)
      .subscribe((recipesState: fromRecipes.State) => {
      this.store.dispatch(new ShoppingListActions.AddIngredients(
        recipesState.recipes[this.id].ingredients)
      );
    });

  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
