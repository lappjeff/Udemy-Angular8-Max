import { RecipesService } from './../recipes.service';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private sLService: ShoppingListService,
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipe = this.recipeService.
  }

  onAddToShoppingList(): void {
    this.sLService.addIngredients(this.recipe.ingredients);
  }
}
