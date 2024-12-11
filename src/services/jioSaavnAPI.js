import axios from "axios";

const BASE_URL = "https://saavn.dev/api";

// Search Songs from API
export const searchSongs = async (query, page = 1, limit = 18) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/songs`, {  
      params: { query, page, limit },
    });
    // Check for valid response structure
    if (response.data && response.data.success && response.data.data.results) {
      return response.data.data.results;
    } else {
      console.error("Unexpected API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching songs:", error.message);
    return []; // Return an empty array on error
  }
};
