import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // mock login for now
  return { isAuthenticated, setIsAuthenticated };
};
