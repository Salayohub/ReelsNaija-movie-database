import { useEffect, useState } from "react";
import { searchVideos } from "../utils/youtube";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, fetchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 4; // show 4 per page on large screens

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchVideos(fetchQuery, 20); // fetch 20 videos
      setVideos(results);
    };
    fetchData();
  }, [fetchQuery]);

  // Pagination logic
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="mb-12 px-4">
      <h2 className="text-xl font-bold mb-5 text-white">{title}</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
            <MovieCard
              key={video.id.videoId}
              videoId={video.id.videoId}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          ))
        ) : (
          <p className="text-gray-400">No videos found</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieRow;
