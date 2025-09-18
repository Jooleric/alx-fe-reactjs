import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchAdvancedUsers(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query.trim() },
    });

    const users = response.data.items;

    // fetch extra details like location & repos count for each user
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const detail = await axios.get(`${BASE_URL}/users/${user.login}`);
        return { ...user, ...detail.data };
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
