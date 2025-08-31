import { Link } from "react-router-dom";

const MovieCard = ({ video }) => {
  // Handle both YouTube API + mock data formats
  const videoId = video.id?.videoId || video.id || "dQw4w9WgXcQ"; 
  // 👆 fallback to Rickroll if something goes wrong 😂
  console.log("VIDEO DATA:", video);
console.log("VIDEO ID:", video.id?.videoId || video.id);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
      <Link to={`/video/${videoId}`}>
        <img
          src={video.snippet?.thumbnails?.medium?.url || "https://via.placeholder.com/320x180"}
          alt={video.snippet?.title || "Untitled Video"}
          className="w-full h-40 object-cover"
        />
      </Link>
      <div className="p-2 text-white">
        <h3 className="truncate font-semibold text-sm">
          {video.snippet?.title || "Untitled Video"}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          {video.snippet?.channelTitle || "Unknown Channel"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
