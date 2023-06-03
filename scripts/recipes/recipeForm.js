import { useMeals } from "../meals/mealProvider.js";
import { saveRecipe } from "./recipeProvider.js";
import { recipeList } from "./recipeList.js";

const eventHub = document.querySelector(".container");
const eventTarget = document.querySelector(".recipe-form-container");

export const recipeFormComponent = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "save-recipe") {
      console.log("Recipe was saved!");

      const newRecipe = {
        title: document.querySelector("#recipe-form-title").value,
        author: document.querySelector("#recipe-form-author").value,
        meal: document.querySelector("#recipe-form-meal").value,
        ingredients: document.querySelector("#recipe-form-ingredients").value,
        directions: document.querySelector("#recipe-form-directions").value,
      };

      saveRecipe(newRecipe).then(() => {
        const message = new CustomEvent("recipeCreated");
        eventHub.dispatchEvent.message;
      });
      // .then(recipeFormComponent);
      // .then(recipeList);
    }
  });

  const render = () => {
    const meals = useMeals();
    eventTarget.innerHTML = `
    <div class="recipe-form">
        <input id="recipe-form-id" type="hidden"/>
        <label for="recipe-form-title">Title:</label>
        <input id="recipe-form-title" type="text"/>
        <label for="recipe-form-author">Submitted by:</label>
        <input id="recipe-form-author" type="text"/>
        <label for="recipe-form-dropdown">Meal Category:</label>
        <select class="recipe-form-dropdown" id="recipe-form-meal">
            <option class="recipe-form-dropdown-option" value="0">Please select a meal</option>
            ${optionList(meals)}
        </select>
        <label for="recipe-form-ingredients">Ingredients:</label>
        <input id="recipe-form-ingredients" type="text"/>
        <label for="recipe-form-directions">Directions:</label>
        <input id="recipe-form-directions" type="text"/>
        <button id="save-recipe">Save Recipe</button>
    </div>
    `;
  };

  const optionList = (meals) => {
    let mealOptions = "";
    meals.map((currentMeal) => {
      mealOptions += `<option class="recipe-form-dropdown-option" value=${currentMeal.name}>${currentMeal.name}</option>`;
    });

    return mealOptions;
  };

  render();
};
