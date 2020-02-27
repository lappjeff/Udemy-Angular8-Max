import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(
    private shoppingList: ShoppingListService,
    private logService: LoggingService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.logService.printLog("Hello from shopping list component ngOnit");
  }

  onEditItem(index: number) {
    this.shoppingList.startedEditing.next(index);
  }
}
