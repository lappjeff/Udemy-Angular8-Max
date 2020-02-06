import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "Test recipe",
      "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg",
      [new Ingredient("Chicken", 1), new Ingredient("Broccoli", 2)]
    ),
    new Recipe(
      "Another test recipe",
      "Test recipe",
      "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg",
      [new Ingredient("Chicken", 1), new Ingredient("Broccoli", 2)]
    )
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
