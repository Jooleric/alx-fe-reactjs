import React from "react";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HomePage />
      <AddRecipeForm />
    </div>
  );
}

export default App;
