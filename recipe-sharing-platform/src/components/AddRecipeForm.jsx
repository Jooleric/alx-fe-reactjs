// src/components/AddRecipeForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the recipe
    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      image,
      ingredients: ingredients.split("\n"), // split lines into array
      steps: steps.split("\n"), // split lines into array
    };

    console.log("New Recipe:", newRecipe);

    // Redirect back to home after submitting
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-gray-700 font-medium">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            rows="2"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            rows="4"
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps (one per line)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
