import { useState } from "react";
import { mockVideos } from "../mockData";

const MovieGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 4; // you can change this to 4, 6, etc.

  // Calculate indexes
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = mockVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Total pages
  const totalPages = Math.ceil(mockVideos.length / videosPerPage);

  return (
    <div className="py-10 px-6">
      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">
                {video.snippet.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          Previous
        </button>

        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieGrid;
