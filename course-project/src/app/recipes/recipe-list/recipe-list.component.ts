import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "Test recipe",
      "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg"
    ),
    new Recipe(
      "A test recipe",
      "Test recipe",
      "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
