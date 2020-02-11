import { RecipesService } from "./../../../recipes.service";
import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.index);
  }
}
