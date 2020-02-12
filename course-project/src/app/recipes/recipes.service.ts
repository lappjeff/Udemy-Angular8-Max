import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
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

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
