// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // ✅ must be in public/
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id.toString() === id);
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Loading recipe details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:text-blue-800">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-6">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-lg shadow-md"
      />

      {/* Ingredients */}
      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Preparation Steps */}
      {recipe.steps && recipe.steps.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
