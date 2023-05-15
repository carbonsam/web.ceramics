import { getMappedDrinks } from "../utils/dataUtils";
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
  const mappedData = getMappedDrinks(jsonData).pop();

  return mappedData;
};

export const getDrinksBySearchTerm = async (term) => {
  const URL = `${URL_BASE}/search.php?s=${term}`;

  const response = await fetch(URL);
  const jsonData = await response.json();
  const mappedData = getMappedDrinks(jsonData);

  return mappedData;
};
