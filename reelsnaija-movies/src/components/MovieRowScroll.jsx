import MovieCard from "./MovieCard";
import { getVideoId } from "../utils/normalizeVideo";

const MovieRowScroll = ({ title, videos }) => {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-yellow-400 mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pb-4">
        {videos.map((video) => (
          <div key={getVideoId(video)} className="flex-shrink-0">
            <MovieCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRowScroll;
