const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const searchVideos = async (query, maxResults = 10) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?part=snippet&q=${query}&type=video&maxResults=${maxResults}&key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch videos");
    const data = await res.json();
    return data.items;
  } catch (error) {
    console.error("YouTube API error:", error);
    return [];
  }
};
