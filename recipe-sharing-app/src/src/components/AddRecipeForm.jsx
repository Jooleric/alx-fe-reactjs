import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    const d = description.trim();
    if (!t || !d) return;
    addRecipe({ id: Date.now(), title: t, description: d });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          required
        />
      </div>
      <div style={{ marginTop: 8 }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe description"
          required
          rows="4"
        />
      </div>
      <div style={{ marginTop: 8 }}>
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
