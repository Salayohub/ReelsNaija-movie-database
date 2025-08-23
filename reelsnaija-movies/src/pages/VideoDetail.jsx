// pages/VideoDetail.jsx
import { useParams } from "react-router-dom";
import useYoutubeSearch from "../hooks/useYoutubeSearch";

export default function VideoDetail() {
  const { id } = useParams();
  const { video, loading } = useYoutubeVideo(id);

  if (loading) return <p className="p-6">Loading video...</p>;
  if (!video) return <p className="p-6">Video not found.</p>;

  const { snippet, statistics } = video;

  return (
    <section className="px-6 py-10">
      {/* Video Player */}
      <div className="w-full max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${id}`}
          title={snippet.title}
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Info */}
      <div className="max-w-4xl mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-2">{snippet.title}</h1>
        <p className="text-gray-400 mb-4">{snippet.channelTitle}</p>
        <p className="mb-4">{snippet.description}</p>
        <div className="flex gap-6 text-sm text-gray-400">
          <span>👁 {statistics?.viewCount} views</span>
          <span>👍 {statistics?.likeCount || "N/A"} likes</span>
        </div>
      </div>
    </section>
  );
}
