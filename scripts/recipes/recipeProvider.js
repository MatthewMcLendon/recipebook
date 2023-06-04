let recipies = [];

const setRecipes = (recipesArray) => {
  recipies = recipesArray.slice();
};

export const useRecipes = () => {
  return recipies;
};

export const getRecipes = () => {
  return fetch("http://localhost:8088/recipes")
    .then((response) => response.json())
    .then(setRecipes);
};

export const deleteRecipe = (recipieID) => {
  return fetch(`http://localhost:8088/recipes/${recipieID}`, {
    method: "DELETE",
  }).then(getRecipes);
};

export const saveRecipe = (recipe) => {
  return fetch("http://localhost:8088/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  }).then(getRecipes);
};

export const updateRecipe = (recipe) => {
  return fetch(`http://localhost:8088/recipes/${recipe.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  }).then(getRecipes);
};

export const getRecipeByID = (recipeID) => {
  return fetch(`http://localhost:8088/recipes/${recipeID}`).then((response) =>
    response.json()
  );
};
