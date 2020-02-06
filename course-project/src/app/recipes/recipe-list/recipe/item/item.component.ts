import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";
import { RecipesService } from "src/app/recipes/recipes.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
