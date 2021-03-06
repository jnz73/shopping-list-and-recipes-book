import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';

// this file contains the routing of the main module
// other routings are in the other modules

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading
  {path: 'shopping-list', component: ShoppingListComponent}, // not necessary to extract in another routing module

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) // preload the modules before the
                                                                                   // user uses them
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
