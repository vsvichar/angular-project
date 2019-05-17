import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://en-support.files.wordpress.com/2014/01/food-dinner-pasta-broccoli.jpg?w=688')
  ];
  constructor() { }

  ngOnInit() {
  }

}
