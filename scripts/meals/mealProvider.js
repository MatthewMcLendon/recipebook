let meals = [];

const setMeals = (mealsArray) => {
  meals = mealsArray.slice();
};

export const useMeals = () => {
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
