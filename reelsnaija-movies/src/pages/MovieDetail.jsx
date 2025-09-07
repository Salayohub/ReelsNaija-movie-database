import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [related, setRelated] = useState([]);
  const [backdrops, setBackdrops] = useState([]);
  const [currentBg, setCurrentBg] = useState(0);

  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

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

    // Fetch related movies
    const fetchRelated = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        setRelated(data.results || []);
      } catch (err) {
        console.error("Error fetching related movies:", err);
      }
    };

    // Fetch images (backdrops) for slideshow
    const fetchImages = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`);
        const data = await res.json();
        if (data.backdrops?.length > 0) {
          setBackdrops(data.backdrops.slice(0, 5)); // limit to 5 backdrops
        }
      } catch (err) {
        console.error("Error fetching movie images:", err);
      }
    };

    // Fetch trailers (YouTube videos)
    const fetchTrailer = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
        const data = await res.json();

        // Find official YouTube trailer
        const trailer = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };

    fetchMovie();
    fetchRelated();
    fetchImages();
    fetchTrailer();
  }, [id]);

  // Rotate background every 5 seconds
  useEffect(() => {
    if (backdrops.length > 1) {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % backdrops.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [backdrops]);

  if (!movie) return <p className="text-center text-white mt-10">Loading...</p>;

  const currentBackdrop =
    backdrops[currentBg]?.file_path
      ? `https://image.tmdb.org/t/p/original${backdrops[currentBg].file_path}`
      : "https://via.placeholder.com/1280x720";

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* 🔹 Rotating Hero Section */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${currentBackdrop})` }}
      >
        {trailerKey && (
          <button
            onClick={() => setShowTrailer(true)}
            className="absolute bottom-10 left-10 bg-red-600 px-4 py-2 rounded font-semibold"
          >
            ▶ Watch Trailer
          </button>
        )}
      </div>

      {/* 🔹 Trailer Modal with Movie Parameters */}
      {showTrailer && trailerKey && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 overflow-auto p-4">
          <div className="relative w-full max-w-4xl">
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Close Button */}
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-2 bg-red-600 px-3 py-1 rounded"
            >
              ✖
            </button>

            {/* Movie Parameters Below Trailer */}
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-400 mb-2">
                {movie.release_date?.slice(0, 4)} • {movie.runtime} min
              </p>
              <p className="mb-4 italic">{movie.tagline}</p>
              <p className="mb-4">{movie.overview}</p>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Genres</h3>
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
          </div>

          {/* Related Movies under Trailer */}
          {related.length > 0 && (
            <div className="max-w-6xl mt-8">
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
          )}
        </div>
      )}

      {/* 🔹 Movie Info Section Outside Modal */}
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
    </div>
  );
};

export default MovieDetail;
