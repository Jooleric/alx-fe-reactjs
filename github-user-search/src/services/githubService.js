// src/services/githubService.js

const BASE_URL = "https://api.github.com/search/users?q=";

/**
 * Advanced GitHub User Search
 * @param {string} username - the username or part of it
 * @param {string} location - optional location filter
 * @param {number} minRepos - optional minimum number of public repos
 * @returns {Promise<Array>} - list of user objects
 */
export async function fetchAdvancedUsers(username, location = "", minRepos = 0) {
  try {
    // 🔹 Build the query string
    let query = `${username}`;

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // 🔹 Call GitHub Search API
    const response = await fetch(`${BASE_URL}${query}`);
    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const data = await response.json();

    // The search API only returns limited fields,
    // so we may need to fetch more details per user
    const usersWithDetails = await Promise.all(
      data.items.map(async (user) => {
        const detailsRes = await fetch(user.url); // user.url gives full profile API
        if (!detailsRes.ok) return user; // fallback to basic data
        const details = await detailsRes.json();
        return { ...user, ...details };
      })
    );

    return usersWithDetails;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
