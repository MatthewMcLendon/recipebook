import { recipeComponent } from "./recipe.js";
import { useRecipes } from "./recipeProvider.js";

const targetElement = document.querySelector(".recipe-list-container");

export const recipeList = () => {
  const recipes = useRecipes();
  targetElement.innerHTML = recipes
    .map((recipe) => {
      return recipeComponent(recipe);
    })
    .join("");
};
