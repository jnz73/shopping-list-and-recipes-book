import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipesSelected.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    });
  }

}
