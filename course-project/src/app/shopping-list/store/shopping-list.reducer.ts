import * as ShoppingListActions from "./shopping-list.actions";
import { Ingredient } from "../../shared/ingredient.model";

const initState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Bread", 10)]
};

export function shoppingListReducer(
  state = initState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
  }
}
