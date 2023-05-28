let meals = [];

export const setMeals = (mealsArray) => {
  meals = mealsArray.slice();
  console.log(meals);
};

export const useMeals = () => {
  console.log(meals);
  return meals;
};

export const getMeals = () => {
  return fetch("http://localhost:8088/meals", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then(setMeals);
};
