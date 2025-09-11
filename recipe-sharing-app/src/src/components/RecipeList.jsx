import React from 'react';
import { useRecipeStore } from './recipeStore';
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — add one above!</p>;
  }

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
          <h3 style={{ margin: '0 0 4px 0' }}>{r.title}</h3>
          <p style={{ margin: 0 }}>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
