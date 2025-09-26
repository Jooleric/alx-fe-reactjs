// src/components/Search.jsx
import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService"; // use advanced search

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]); // now stores multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(username); // fetch list of users
      if (data.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* Search input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p>{error}</p>}

      {/* Show multiple users */}
      {users.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          {users.map((user) => (
            <div key={user.id} style={{ marginBottom: "1rem" }}>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                style={{ borderRadius: "50%" }}
              />
              <p>{user.login}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
