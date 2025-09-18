import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    try {
      setError("");
      const data = await searchUsers(username);
      setUsers(data.items || []);
    } catch (err) {
      setError("Looks like we can't find the user");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUserData(); 
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
