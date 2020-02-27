import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule, CommonModule, ShoppingListRoutingModule, FormsModule]
})
export class ShoppingListModule {}
