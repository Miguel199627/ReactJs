import "./index.css";
import React from "react";
import RecipeTitle from "./RecipeTitle";
// TODO: Import IngredientList
import IngredientList from './IngredientList'

function App() {
  // TODO: Add recipe object
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: false },
      { name: "Pepper", prepared: false },
    ],
    desafio: [
        { name: 'Agregue las patatas cortadas a una olla con agua muy salada.', prepared: false },
        { name: "Lleve la olla a ebullición.", prepared: false },
        { name: "Hierva las patatas hasta que estén tiernas, unos 15-20 minutos.", prepared: false },
        { name: "Cuele las patatas.", prepared: false },
        { name: "Vuelva a poner las patatas en la olla.", prepared: false },
        { name: "Agregue mantequilla, nata, sal y pimienta al gusto.", prepared: false },
        { name: "Haga puré las patatas.", prepared: false },
        { name: "Vuelva a sazonar y agregue mantequilla y nata al gusto.", prepared: false },
    ]
  };
  const isComplete = false;

  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      <h4 style={{ margin: "2px" }}>{isComplete ? "done" : "normal"}</h4>
      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />
      <IngredientList ingredients={recipe.desafio} />
    </article>
  );
}

export default App;
