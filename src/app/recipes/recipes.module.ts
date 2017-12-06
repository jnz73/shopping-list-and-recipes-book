import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {RecipeItemComponent} from './recipes-list/recipe-item/recipe-item.component';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {recipeReducer} from './store/recipes.reducers';
import {EffectsModule} from '@ngrx/effects';
import {RecipesEffects} from './store/recipes.effects';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    // ngrx import for lazy loading forFeature: parameters name of the feature and reducers
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipesEffects])
  ]

})
export class RecipesModule {

}
