import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredientsText, setIngredientsText] = useState(""); // comma separated
  const [prepTime, setPrepTime] = useState(""); // minutes

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const ingredients = ingredientsText
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    // pass an object; store will handle ID
    addRecipe({
      title: title.trim(),
      description: description.trim(),
      ingredients,
      prepTime: prepTime ? Number(prepTime) : undefined,
    });

    // reset form
    setTitle("");
    setDescription("");
    setIngredientsText("");
    setPrepTime("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        value={ingredientsText}
        onChange={(e) => setIngredientsText(e.target.value)}
        placeholder="Ingredients (comma separated)"
      />
      <input
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
        placeholder="Prep time (minutes)"
        type="number"
        min="0"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
