import { recipeComponent } from "./recipe.js";
import { useRecipes, deleteRecipe } from "./recipeProvider.js";

const targetElement = document.querySelector(".recipe-list-container");
const eventHub = targetElement;

export const recipeList = () => {
  const recipes = useRecipes();

  targetElement.innerHTML = recipes
    .map((recipe) => {
      return recipeComponent(recipe);
    })
    .join("");

  eventHub.addEventListener("click", (clickEvent) => {
    if (
      clickEvent.target.id ===
      `deleteRecipe${clickEvent.target.parentElement.id}`
    ) {
      console.log("Deleting", clickEvent.target.parentElement.id);
      deleteRecipe(clickEvent.target.parentElement.id)
        .then(() => {
          const message = new CustomEvent("recipeDeleted");
          eventHub.dispatchEvent.message;
        })
        .then(() => {
          location.reload();
        });
    }
  });
};
