// src/services/githubService.js

const BASE_URL = "https://api.github.com/search/users?q=";

/**
 * Search GitHub users with query parameters
 * @param {string} username - the username or part of it
 * @param {string} location - optional location filter
 * @param {number} minRepos - optional minimum number of public repos
 * @returns {Promise<object>} - search results
 */
export async function searchUsers(username, location = "", minRepos = 0) {
  try {
    let query = `${username}`;

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await fetch(`${BASE_URL}${query}`);
    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
