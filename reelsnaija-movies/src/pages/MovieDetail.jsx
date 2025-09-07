import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
  const { id } = useParams(); // movie id from URL
  const [movie, setMovie] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    // Fetch movie details
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    };

    // Fetch related/recommended movies
    const fetchRelated = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        setRelated(data.results || []);
      } catch (err) {
        console.error("Error fetching related movies:", err);
      }
    };

    fetchMovie();
    fetchRelated();
  }, [id]);

  if (!movie) return <p className="text-center text-white mt-10">Loading...</p>;

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://via.placeholder.com/1280x720";

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* 🔹 Hero Section with backdrop */}
      <div
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
        </div>
      </div>

      {/* 🔹 Movie Info Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-400 mb-2">
          {movie.release_date?.slice(0, 4)} • {movie.runtime} min
        </p>
        <p className="mb-4 italic">{movie.tagline}</p>
        <p className="mb-6">{movie.overview}</p>

        {/* Genres */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Related Movies Scroll Row */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold mb-4">Related Movies</h3>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {related.map((rel) => (
            <div
              key={rel.id}
              className="min-w-[160px] bg-gray-800 rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={
                  rel.poster_path
                    ? `https://image.tmdb.org/t/p/w300${rel.poster_path}`
                    : "https://via.placeholder.com/160x240"
                }
                alt={rel.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-2 text-sm">
                <h4 className="truncate font-semibold">{rel.title}</h4>
                <p className="text-gray-400">{rel.release_date?.slice(0, 4)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
