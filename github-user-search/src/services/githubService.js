// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch a single GitHub user’s full profile data
 * @param {string} username - GitHub username
 * @returns {Promise<object>} - user object
 */
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

/**
 * Advanced GitHub User Search
 * @param {string} username - the username or part of it
 * @param {string} location - optional location filter
 * @param {number} minRepos - optional minimum number of public repos
 * @returns {Promise<Array>} - list of user objects
 */
export async function fetchAdvancedUsers(username, location = "", minRepos = 0) {
  try {
    // 🔹 Build query
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>=${minRepos}`;

    // 🔹 Use axios for search
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    const data = response.data;

    // 🔹 Fetch details for each user
    const usersWithDetails = await Promise.all(
      data.items.map(async (user) => {
        try {
          const details = await axios.get(user.url);
          return { ...user, ...details.data };
        } catch {
          return user; // fallback if details fetch fails
        }
      })
    );

    return usersWithDetails;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
