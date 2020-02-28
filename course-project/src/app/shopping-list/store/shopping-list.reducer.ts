import { ADD_INGREDIENT } from "./shopping-list.actions";
import { Ingredient } from "../../shared/ingredient.model";
import { Action } from "@ngrx/store";

const initState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Bread", 10)]
};

export function shoppingListReducer(state = initState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action] };
  }
}
