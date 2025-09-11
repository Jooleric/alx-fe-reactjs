import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
}));

export default useRecipeStore;
