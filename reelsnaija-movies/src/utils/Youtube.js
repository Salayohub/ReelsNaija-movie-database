// utils/youtube.js
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function searchVideos(query, maxResults = 12) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}`
    );

    if (!res.ok) throw new Error("Failed to fetch videos");

    const data = await res.json();
    return data.items;
  } catch (err) {
    console.error("YouTube API Error:", err);
    throw err;
  }
}
