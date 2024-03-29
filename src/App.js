import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };


  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((recipe, i) => i !== index));
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipe} />
      <RecipeCreate onAddRecipe={addRecipe} />
    </div>
  );
};

export default App;
