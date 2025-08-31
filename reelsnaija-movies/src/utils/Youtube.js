// utils/Youtube.js

const rawKeys = import.meta.env.VITE_YOUTUBE_API_KEYS || "";
const API_KEYS = rawKeys.length > 0 ? rawKeys.split(",") : []; // array of keys
let keyIndex = 0;

/**
 * Try fetching with fallback API keys
 */
const fetchWithFallback = async (url) => {
  for (let i = 0; i < API_KEYS.length; i++) {
    const key = API_KEYS[keyIndex];
    try {
      const res = await fetch(url + `&key=${key}`);
      if (res.ok) {
        return await res.json();
      } else {
        const data = await res.json();
        if (data.error?.errors?.[0]?.reason === "quotaExceeded") {
          console.warn(`Quota exceeded for key: ${key}, switching...`);
          keyIndex = (keyIndex + 1) % API_KEYS.length; // rotate key
          continue;
        }
        throw new Error("YouTube fetch failed");
      }
    } catch (err) {
      console.error("Fetch error with key", key, err);
      keyIndex = (keyIndex + 1) % API_KEYS.length;
    }
  }
  throw new Error("All YouTube API keys failed.");
};

/**
 * Search YouTube videos
 */
export const searchVideos = async (query, maxResults = 10) => {
  try {
    if (!API_KEYS.length) {
      console.warn("⚠️ No API keys found, returning empty list");
      return [];
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=${maxResults}`;

    const data = await fetchWithFallback(url);
    return data.items || [];
  } catch (error) {
    console.error("YouTube API error:", error);
    return [];
  }
};
