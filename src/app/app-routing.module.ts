import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading
  {path: 'shopping-list', component: ShoppingListComponent}, // not necessary to extract in another routing module

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
