// in this file we bundle all the application's states
// so we manage state in one clean place

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

// we export all the reducer in the app
export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
};
