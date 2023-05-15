import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Browse from "./routes/Browse.jsx";
import Search from "./routes/Search.jsx";
import Category from "./routes/Category.jsx";
import Drink from "./routes/Drink.jsx";
import Favorites from "./routes/Favorites.jsx";
import {
  getDrinkRecipe,
  listDrinkCategories,
  listDrinksForCategory,
} from "./services/CocktailService.js";

import "@picocss/pico";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Browse />,
        loader: listDrinkCategories,
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
        loader: ({ params }) => listDrinksForCategory(params.categoryId),
      },
      {
        path: "/drink/:drinkId",
        element: <Drink />,
        loader: ({ params }) => getDrinkRecipe(params.drinkId),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
