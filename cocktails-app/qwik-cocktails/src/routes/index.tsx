import {component$, useStore} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {routeLoader$} from "@builder.io/qwik-city";

export const useCocktails = routeLoader$(async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', {
        headers: {
            "Content-Type": "application/json",
        }
    })

    const data = await response.json();
    return data as {
        drinks: {
            idDrink: string,
            strDrink: string,
            strDrinkAlternate: string | null,
            strTags: string | null,
            strVideo: string | null,
            strCategory: string | null,
            strIBA: string | null,
            strAlcoholic: "Alcoholic" | "Non-Alcoholic",
            strGlass: string,
            strInstructions: string,
            strDrinkThumb: string,
            strIngredient1: string | null,
            strIngredient2: string | null,
            strIngredient3: string | null,
            strIngredient4: string | null,
            strIngredient5: string | null,
            strIngredient6: string | null,
            strIngredient7: string | null,
            strIngredient8: string | null,
            strIngredient9: string | null,
            strIngredient10: string | null,
            strIngredient11: string | null,
            strIngredient12: string | null,
            strIngredient13: string | null,
            strIngredient14: string | null,
            strIngredient15: string | null,
            strMeasure1: string | null,
            strMeasure2: string | null,
            strMeasure3: string | null,
            strMeasure4: string | null,
            strMeasure5: string | null,
            strMeasure6: string | null,
            strMeasure7: string | null,
            strMeasure8: string | null,
            strMeasure9: string | null,
            strMeasure10: string | null,
            strMeasure11: string | null,
            strMeasure12: string | null,
            strMeasure13: string | null,
            strMeasure14: string | null,
            strMeasure15: string | null,
            strImageSource: string | null,
            strImageAttribution: string | null,
            strCreativeCommonsConfirmed: "Yes" | "No",
            dateModified: string
        }
    }[]
})

export default component$(() => {
    const cocktails = useCocktails()

    return (
        <>
            {cocktails.value.drinks.map((x, i) => <p key={i}>{JSON.stringify(x)}</p>)}
        </>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
