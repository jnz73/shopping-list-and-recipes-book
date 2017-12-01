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
    RecipesRoutingModule
  ]

})
export class RecipesModule {

}
