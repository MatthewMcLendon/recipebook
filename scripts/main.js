import { recipeFormComponent } from "./recipes/recipeForm.js";
import { getMeals } from "./meals/mealProvider.js";
import { getRecipes } from "./recipes/recipeProvider.js";
import { recipeList } from "./recipes/recipeList.js";

getMeals().then(getRecipes).then(recipeFormComponent).then(recipeList);
