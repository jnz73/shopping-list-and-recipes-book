import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
