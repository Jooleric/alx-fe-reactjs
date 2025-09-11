import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {recipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.id);
            return (
              <li key={recipe.id}>
                {recipe.title}{" "}
                <button
                  onClick={() =>
                    isFavorite
                      ? removeFavorite(recipe.id)
                      : addFavorite(recipe.id)
                  }
                >
                  {isFavorite ? "Unfavorite" : "Favorite"}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
