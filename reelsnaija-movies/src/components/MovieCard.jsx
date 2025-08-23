// components/MovieCard.jsx
export default function MovieCard({ video }) {
  const { id, snippet } = video;
  const videoId = id?.videoId;

  return (
    <div className="w-64 bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Thumbnail */}
      <img
        src={snippet?.thumbnails?.medium?.url}
        alt={snippet?.title}
        className="w-full h-36 object-cover"
      />
      {/* Details */}
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{snippet?.title}</h3>
        <p className="text-xs text-gray-400">{snippet?.channelTitle}</p>
      </div>
    </div>
  );
}
