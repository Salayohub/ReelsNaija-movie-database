const API_KEYS = import.meta.env.VITE_YOUTUBE_API_KEYS?.split(",") || [];
let currentKeyIndex = 0;

function getCurrentKey() {
  return API_KEYS[currentKeyIndex];
}

async function fetchWithFallback(url) {
  if (API_KEYS.length === 0) {
    console.warn("⚠️ No API keys found, returning empty list");
    return { items: [] };
  }

  try {
    const res = await fetch(`${url}&key=${getCurrentKey()}`);
    const data = await res.json();

    if (data.error) {
      console.error("YouTube API error:", data.error);

      // rotate key if quota exceeded
      currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
      console.log(`🔄 Switching to backup key: ${getCurrentKey()}`);

      // retry once with new key
      const retryRes = await fetch(`${url}&key=${getCurrentKey()}`);
      return await retryRes.json();
    }

    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
    return { items: [] };
  }
}

export async function searchVideos(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(query)}`;
  const data = await fetchWithFallback(url);
  return data.items || [];
}
