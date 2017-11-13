import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesListComponent implements OnInit {
  recipies = [];
  constructor() { }

  ngOnInit() {
  }

}
