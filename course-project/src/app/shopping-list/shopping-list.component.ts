import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { LoggingService } from "../logging.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromShoppingList from "./store/shopping-list.reducer";
import * as ShoppingListActions from "./store/shopping-list.actions";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  constructor(
    private logService: LoggingService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select("shoppingList");

    this.logService.printLog("Hello from shopping list component ngOnit");
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
