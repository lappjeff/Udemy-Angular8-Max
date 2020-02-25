import { Ingredient } from "./../../shared/ingredient.model";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeIngredients = new FormArray([]);

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }
  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }
  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          this.recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
      ingredients: this.recipeIngredients
    });
  }
}
