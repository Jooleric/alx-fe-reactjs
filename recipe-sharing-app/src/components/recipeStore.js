import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe with an id
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: Date.now().toString(), ...recipe }, // auto-generate ID
      ],
    })),

  // Update recipe by id
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // Delete recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
