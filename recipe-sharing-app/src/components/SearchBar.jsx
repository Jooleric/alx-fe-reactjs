import React, { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);
  const [value, setValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setSearchTerm(value);
      filterRecipes();
    }, 300); // debounce
    return () => clearTimeout(id);
  }, [value, setSearchTerm, filterRecipes]);

  return (
    <input
      type="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search by title, ingredients, or prep time..."
      style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
    />
  );
};

export default SearchBar;
