const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// 🔍 Search movies by keyword
export const searchMovies = async (query, page = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    );
    if (!res.ok) throw new Error("TMDB fetch failed");
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("TMDB API error:", err);
    return [];
  }
};

// 🎬 Get trending movies
export const getTrendingMovies = async (page = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    if (!res.ok) throw new Error("TMDB fetch failed");
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("TMDB API error:", err);
    return [];
  }
};