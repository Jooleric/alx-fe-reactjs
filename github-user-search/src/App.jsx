import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubApi";

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await getUser(username);
      setUserData(data);
    } catch (error) {
      setUserData(null);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
