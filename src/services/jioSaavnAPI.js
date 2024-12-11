import axios from "axios";

const BASE_URL = "https://saavn.dev/api";

// Search Songs with 320kbps quality
export const searchSongs = async (query, page = 1, limit = 18) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/songs`, {  
      params: { query, page, limit },
    });
    // Check for valid response structure
    if (response.data && response.data.success && response.data.data.results) {
      const results = response.data.data.results;

      // Map to include only 320kbps URL
      const formattedResults = results.map((song) => {
        const highQualityUrl = song.downloadUrl?.find((urlObj) => urlObj.quality === "320kbps")?.url;
        // const highQualityImage = song.image?.find((imageObj) => imageObj.quality === "150x150")?.url;
        // const highQualityImage = song.image.quality==="150x150" ? song.image.url : "N/A";

        return {
          id: song.id,
          name: song.name,
          album: song.album?.name,
          artists: song.artists?.primary?.map((artist) => artist.name).join(", "),
          duration: song.duration,
          language: song.language,
          image: song.image, // Default if no 50x50 image URL
          url: highQualityUrl || "N/A", // Default if no 320kbps URL
        };
      });

      return formattedResults;
    } else {
      console.error("Unexpected API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching songs:", error.message);
    return []; // Return an empty array on error
  }
};