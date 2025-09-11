import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.trim()) return;
    addRecipe(recipe);
    setRecipe("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Enter a recipe"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
