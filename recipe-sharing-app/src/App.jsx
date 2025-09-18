import React from "react";
import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
