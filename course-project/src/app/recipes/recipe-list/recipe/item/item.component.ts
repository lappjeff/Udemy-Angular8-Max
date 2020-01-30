import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
