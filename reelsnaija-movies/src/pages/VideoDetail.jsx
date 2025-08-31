import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchVideos } from "../utils/Youtube";
import { mockVideos } from "../mockData";
import { USE_MOCK_DATA } from "../config";
import { getVideoId } from "../utils/normalizeVideo";
import MovieRowScroll from "../components/MovieRowScroll";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (USE_MOCK_DATA) {
      const found = mockVideos.find((v) => getVideoId(v) === id);
      setVideo(found);
      setRelated(mockVideos.filter((v) => getVideoId(v) !== id).slice(0, 10));
    } else {
      searchVideos("Nollywood movies 2025").then((data) => {
        const found = data.find((v) => getVideoId(v) === id);
        setVideo(found);
        setRelated(data.filter((v) => getVideoId(v) !== id).slice(0, 10));
      });
    }
  }, [id]);

  if (!video) return <p className="text-white text-center py-10">Loading...</p>;

  const title = video.snippet?.title || "Untitled Video";
  const description = video.snippet?.description || "No description available.";
  const channel = video.snippet?.channelTitle || "Unknown Channel";
  const publishedAt = video.snippet?.publishedAt
    ? new Date(video.snippet.publishedAt).getFullYear()
    : "2025";

  // mock details
  const duration = "2h 15m";
  const synopsis =
    "This is a gripping Nollywood blockbuster filled with drama, suspense, and unforgettable performances.";

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen px-6 py-10">
      {/* Video Player */}
      <div className="w-full max-w-5xl mx-auto mb-6 aspect-video">
        {id ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-red-500 text-center">⚠️ Invalid video ID</p>
        )}
      </div>

      {/* Details */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">{title}</h1>
        <p className="text-sm text-gray-400 mb-4">
          {channel} • {publishedAt} • {duration}
        </p>

        <h2 className="text-lg font-semibold text-white mb-2">Synopsis</h2>
        <p className="text-sm leading-relaxed mb-6">{synopsis}</p>

        <h2 className="text-lg font-semibold text-white mb-2">About</h2>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>

      {/* Related Movies Row */}
      <MovieRowScroll title="Related Movies" videos={related} />
    </div>
  );
};

export default VideoDetail;
