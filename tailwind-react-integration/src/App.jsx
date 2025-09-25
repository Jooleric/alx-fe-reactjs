import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css"; //
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">My App</h1>
      <UserProfile />
    </div>
  );
}

export default App;