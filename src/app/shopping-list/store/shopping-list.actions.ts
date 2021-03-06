// import ngRx to manage state
import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';

// const string to refer to the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const RETURN_INGREDIENTS = 'RETURN_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';
export const STORE_INGREDIENTS = 'STORE_INGREDIENTS';
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';

// actions will tell different possible change of state
// class must implement the Action interface
export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(public payload: { ingredient: Ingredient }) {
  }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {
  }
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;

}
export class ReturnIngredients implements Action {
  readonly type = RETURN_INGREDIENTS;
}
export class StoreIngredients implements Action {
  readonly type = STORE_INGREDIENTS;
}

export class FetchIngredients implements Action {
  readonly type = FETCH_INGREDIENTS;
}


// bundle all the actions in an export
export type ShoppingListActions = AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | ReturnIngredients
  | StopEdit
  | StoreIngredients
  | FetchIngredients;
