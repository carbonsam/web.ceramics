export const getMappedDrinks = (json) =>
  json.drinks?.map((x) => ({
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
  })) ?? [];
