import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  // Set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes by title, ingredients, or prepTime
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((r) => {
        const search = state.searchTerm.toLowerCase();
        const matchesTitle = r.title.toLowerCase().includes(search);
        const matchesIngredients =
          r.ingredients?.some((i) => i.toLowerCase().includes(search)) ||
          false;
        const matchesPrepTime =
          r.prepTime?.toString().includes(search) || false;
        return matchesTitle || matchesIngredients || matchesPrepTime;
      }),
    })),
}));

export default useRecipeStore;
