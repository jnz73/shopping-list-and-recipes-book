import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>; // need an Observable for retreiving from Store which yelds an object

// inject services in the constructor
  constructor(private store: Store<fromApp.AppState>// inject ngRx State

  ) {
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList'); // use select to retrive state
  }


  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
