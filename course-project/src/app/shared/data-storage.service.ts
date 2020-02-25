import { RecipesService } from "./../recipes/recipes.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  baseUrl = "https://course-project-5ae09.firebaseio.com/";
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.baseUrl}/recipes.json`, recipes).subscribe(res => {
      console.log(res);
    });
  }
}
