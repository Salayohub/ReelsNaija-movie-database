import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchVideos } from "../utils/Youtube";
import { mockVideos } from "../mockData";
import { USE_MOCK_DATA } from "../config";
import MovieCard from "../components/MovieCard";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (USE_MOCK_DATA) {
      // find the video in mock data
      const found = mockVideos.find(
        (v) => v.id?.videoId === id || v.id === id
      );
      setVideo(found);
      // mock related movies (just other videos)
      setRelated(mockVideos.filter((v) => v.id !== id).slice(0, 10));
    } else {
      // fetch related videos from YouTube
      searchVideos("Nollywood movies 2025").then((data) => {
        setVideo(data.find((v) => v.id.videoId === id));
        setRelated(data.filter((v) => v.id.videoId !== id).slice(0, 10));
      });
    }
  }, [id]);

  if (!video) return <p className="text-white text-center">Loading...</p>;

  const title = video.snippet?.title || "Untitled Video";
  const description = video.snippet?.description || "No description available.";
  const channel = video.snippet?.channelTitle || "Unknown Channel";
  const publishedAt = video.snippet?.publishedAt
    ? new Date(video.snippet.publishedAt).getFullYear()
    : "2025";

  // mock extra details
  const duration = "2h 15m";
  const synopsis =
    "This is a gripping Nollywood blockbuster filled with drama, suspense, and unforgettable performances.";

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen px-6 py-10">
      {/* Video Player */}
      <div className="w-full max-w-5xl mx-auto mb-6 aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Details Section */}
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

      {/* Related Movies (Horizontal Scroll) */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">
          Related Movies
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pb-4">
          {related.map((rel) => (
            <div key={rel.id?.videoId || rel.id} className="min-w-[200px] flex-shrink-0">
              <MovieCard video={rel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
