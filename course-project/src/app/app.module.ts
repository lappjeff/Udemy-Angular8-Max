import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header/header.component";
import { AuthComponent } from "./auth/auth/auth.component";
import { RecipesModule } from "./recipes/recipes.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
