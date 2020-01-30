import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
