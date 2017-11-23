import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipesSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [new Recipe('Test', 'This is a test description', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recipe('Another Test', 'This is a test description', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')];

    getRecipes() {
        return this.recipes.slice();
    }

}
