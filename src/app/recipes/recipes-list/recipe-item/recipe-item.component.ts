import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeService.recipesSelected.emit(this.recipe);
  }

}
