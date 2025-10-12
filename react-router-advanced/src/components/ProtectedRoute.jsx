import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication check
const isAuthenticated = true; // change to false to test redirection

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    // redirect unauthenticated users to home page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
