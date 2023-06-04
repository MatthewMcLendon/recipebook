export const recipeComponent = (recipe) => {
  return `
    <div class="recipe-card" id=${recipe.id}>
        <h2 class="recipe-name">${recipe.title}</h2>
        <p class="recipe-ingredients">Ingredients: ${recipe.ingredients}</p>
        <p class="recipe-directions">Directions: ${recipe.directions}</p>
        <p class="recipe-author">Submitted by: ${recipe.author}</p>
        <p class="recipe-meal">${recipe.meal}</p>
        <button id="deleteRecipe${recipe.id}">Delete</button>
        <button id="updateRecipe${recipe.id}">Update</button>
    </div>
    `;
};
