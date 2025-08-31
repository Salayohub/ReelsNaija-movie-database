import { Link } from "react-router-dom";

const MovieCard = ({ video }) => {
  // Handle both YouTube API + mock data formats
  const videoId = video.id?.videoId || video.id || "dQw4w9WgXcQ"; 
  console.log("VIDEO DATA:", video);
  console.log("VIDEO ID:", videoId);

  return (
    <div className="relative bg-gray-800 min-w-[220px] max-w-[200px] aspect-[4/7] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <Link to={`/video/${videoId}`}>
        {/* Thumbnail */}
        <img
          src={video.snippet?.thumbnails?.medium?.url || "https://via.placeholder.com/320x180"}
          alt={video.snippet?.title || "Untitled Video"}
          className="w-full h-full object-cover"
        />

        {/* Overlay with title & channel */}
        <div className="absolute bottom-0 left-0 w-full bg-white hover:opacity-50 text-black py-4">
          <h3 className="truncate font-semibold text-sm">
            {video.snippet?.title || "Untitled Video"}
          </h3>
          <p className="text-sm text-red-600">
            {video.snippet?.channelTitle || "Unknwn Channel"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
