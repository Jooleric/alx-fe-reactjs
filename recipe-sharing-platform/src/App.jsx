import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Add Recipe Form */}
          <Route path="/add" element={<AddRecipeForm />} />

          {/* Recipe Detail Page */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
