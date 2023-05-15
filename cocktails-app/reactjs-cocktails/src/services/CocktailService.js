import { slugify, unslugify } from "../utils/stringUtils";

const URL_BASE = "https://www.thecocktaildb.com/api/json/v1/1";

export const listDrinkCategories = async () => {
  const URL = `${URL_BASE}/list.php?c=list`;

  const response = await fetch(URL);
  const jsonData = await response.json();

  const mappedData = jsonData.drinks.map((x) => ({
    id: slugify(x.strCategory),
    name: x.strCategory,
  }));

  return mappedData;
};

export const listDrinksForCategory = async (categoryId) => {
  const URL = `${URL_BASE}/filter.php?c=${unslugify(categoryId)}`;

  const response = await fetch(URL);
  const jsonData = await response.json();

  const mappedData = jsonData.drinks.map((x) => ({
    id: x.idDrink,
    name: x.strDrink,
    imageUrl: x.strDrinkThumb,
  }));

  return mappedData;
};

export const getDrinkRecipe = async (drinkId) => {
  const URL = `${URL_BASE}/lookup.php?i=${drinkId}`;

  const response = await fetch(URL);
  const jsonData = await response.json();

  const mappedData = jsonData.drinks
    .map((x) => ({
      id: x.idDrink,
      name: x.strDrink,
      imageUrl: x.strDrinkThumb,
      instructions: x.strInstructions,
      ingredients: Array.from({ length: 15 })
        .map((t, i) => ({
          name: x[`strIngredient${i + 1}`],
          measure: x[`strMeasure${i + 1}`],
        }))
        .filter((t) => t.name),
      glass: x.strGlass,
      category: x.strCategory,
      dateModified: x.dateModified,
    }))
    .pop();

  return mappedData;
};
