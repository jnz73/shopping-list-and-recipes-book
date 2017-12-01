import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';

const recipeRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [ // empty path becouse already declared with lazy loading in app-routing.module.ts
      { path: '', component: RecipeStartComponent},
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      { path: ':id', component: RecipesDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard] // it's only used in the recipes module, so we move it here from the app.module

})
export class RecipesRoutingModule {

}
