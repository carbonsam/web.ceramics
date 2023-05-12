import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Browse from "./routes/browse/index.jsx";
import Search from "./routes/search/index.jsx";
import Category from "./routes/category/index.jsx";
import Drink from "./routes/drink/index.jsx";
import { getDrinkRecipe, listDrinkCategories, listDrinksForCategory } from "./services/CocktailService.js";

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
        path: '/category/:categoryId',
        element: <Category />,
        loader: ({ params }) => listDrinksForCategory(params.categoryId),
      },
      {
        path: '/category/:categoryId/drink/:drinkId',
        element: <Drink />,
        loader: ({ params }) => getDrinkRecipe(params.drinkId),
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
