import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export const getUser = async (username) => {
  try {
    const response = await api.get(`/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
