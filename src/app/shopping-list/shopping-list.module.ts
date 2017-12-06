import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  // components part of this module
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    // basic angular functionality (ngIf...)
    CommonModule,
    // angular forms
    FormsModule,

  ]
})
export class ShoppingListModule {}
