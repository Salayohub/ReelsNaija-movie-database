import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/320x180";

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
      <Link to={`/movie/${movie.id}`}>
        <img src={poster} alt={movie.title} className="w-full h-64 object-cover" />
        <div className="p-2 text-white">
          <h3 className="truncate font-semibold text-sm">{movie.title}</h3>
          <p className="text-xs text-gray-400">{movie.release_date?.slice(0, 4)}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
