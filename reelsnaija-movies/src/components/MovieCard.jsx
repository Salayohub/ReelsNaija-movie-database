import { Link } from "react-router-dom";
import { getVideoId } from "../utils/normalizeVideo";

const MovieCard = ({ video }) => {
  const videoId = getVideoId(video);

  return (
    <div className="relative bg-gray-800 w-[220px] aspect-[4/6] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <Link to={`/video/${videoId}`}>
        {/* Thumbnail */}
        <img
          src={video.snippet?.thumbnails?.medium?.url || "https://via.placeholder.com/320x180"}
          alt={video.snippet?.title || "Untitled Video"}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-black py-2 px-2">
          <h3 className="truncate font-semibold text-sm">
            {video.snippet?.title || "Untitled Video"}
          </h3>
          <p className="text-xs text-red-600 truncate">
            {video.snippet?.channelTitle || "Unknown Channel"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
