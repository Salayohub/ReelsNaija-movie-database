import { useEffect, useState } from "react";
import { searchMovies, getTrendingMovies } from "../utils/tmdb";
import MovieCard from "./MovieCard";

const MovieRow = ({ query, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    } else {
      getTrendingMovies().then(setMovies);
    }
  }, [query]);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
