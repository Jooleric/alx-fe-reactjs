// src/components/Search.jsx
import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(username);
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
              <p>
                <strong>{user.login}</strong>
              </p>
              {/* html_url → GitHub profile link */}
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </p>
              {/* location → may be missing, so fallback */}
              <p>Location: {user.location ? user.location : "Not specified"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
