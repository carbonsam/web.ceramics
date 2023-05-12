const URL_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

export const listDrinkCategories = async () => {
    const URL = `${URL_BASE}/list.php?c=list`;

    const response = await fetch(URL);
    const jsonData = await response.json();

    const mappedData = jsonData.drinks.map(x => ({
        id: x.strCategory.replaceAll(' ', '_').toLowerCase(),
        name: x.strCategory,
    }));

    return mappedData;
};

export const listDrinksForCategory = async (categoryId) => {
    const URL = `${URL_BASE}/filter.php?c=${categoryId}`;

    const response = await fetch(URL);
    const jsonData = await response.json();

    const mappedData = jsonData.drinks.map(x => ({
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

    const mappedData = jsonData.drinks.map(x => ({
        id: x.idDrink,
        name: x.strDrink,
        imageUrl: x.strDrinkThumb,
        instructions: x.strInstructions,
        ingredients: [
            {
                name: x.strIngredient1,
                measure: x.strMeasure1,
            },
            {
                name: x.strIngredient2,
                measure: x.strMeasure2,
            },
            {
                name: x.strIngredient3,
                measure: x.strMeasure3,
            },
            {
                name: x.strIngredient4,
                measure: x.strMeasure4,
            },
            {
                name: x.strIngredient5,
                measure: x.strMeasure5,
            },
            {
                name: x.strIngredient6,
                measure: x.strMeasure6,
            },
            {
                name: x.strIngredient7,
                measure: x.strMeasure7,
            },
            {
                name: x.strIngredient8,
                measure: x.strMeasure8,
            },
            {
                name: x.strIngredient9,
                measure: x.strMeasure9,
            },
            {
                name: x.strIngredient10,
                measure: x.strMeasure10,
            },
            {
                name: x.strIngredient11,
                measure: x.strMeasure11,
            },
            {
                name: x.strIngredient12,
                measure: x.strMeasure12,
            },
            {
                name: x.strIngredient13,
                measure: x.strMeasure13,
            },
            {
                name: x.strIngredient14,
                measure: x.strMeasure14,
            },
            {
                name: x.strIngredient15,
                measure: x.strMeasure15,
            },
        ],
        glass: x.strGlass,
        category: x.strCategory,
        dateModified: x.dateModified,
    })).pop();

    return mappedData;
};
