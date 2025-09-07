// pages/SearchResults.jsx
import { useSearchParams, Link } from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch"; // ✅ use TMDB hook
import MovieCard from "../components/MovieCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { movies, loading, error } = useMovieSearch(query); // ✅ movies

  if (!query) return <p className="p-6">Start by searching for a movie...</p>;
  if (loading) return <p className="p-6">Loading results...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Results for "{query}"</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>  {/* ✅ use TMDB id */}
            <MovieCard movie={movie} />  {/* ✅ pass movie, not video */}
          </Link>
        ))}
      </div>
    </section>
  );
}
// Note: Removed YouTube-specific code and replaced with TMDB movie search logic.