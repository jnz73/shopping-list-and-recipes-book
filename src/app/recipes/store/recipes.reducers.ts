import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as RecipesActions from './recipes.actions';
import * as fromApp from '../../store/app.reducer';


// map a name to a state to allow state with lazy loading
export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
    recipes: [
      new Recipe(
        'Test',
        'This is a test description',
        'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
        [new Ingredient('meat', 1), new Ingredient('bread', 2)]),
      new Recipe(
        'Another Test',
        'This is a test description',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Spaghettata.JPG/270px-Spaghettata.JPG',
        [new Ingredient('lettuce', 2), new Ingredient('tomato', 3)
        ])
    ]
  }
;

export function recipeReducer(state = initialState, action: RecipesActions.RecipesActions) {
  switch (action.type) {
    case (RecipesActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipesActions.ADD_RECIPE):
      return {
        ...state,
        recipes:
          [...state.recipes, action.payload]
      };
    case (RecipesActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {...recipe, ...action.payload.recipe};
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipesActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
