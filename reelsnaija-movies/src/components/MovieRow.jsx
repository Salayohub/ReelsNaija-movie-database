// components/MovieRow.jsx
import useYoutubeSearch from "../hooks/useYoutubeSearch";
import MovieCard from "./MovieCard";

export default function MovieRow({ query, title }) {
  const { videos, loading, error } = useYoutubeSearch(query);

  if (loading) return <p className="px-6 py-10">Loading {title}...</p>;
  if (error) return <p className="px-6 py-10 text-red-500">{error}</p>;

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto -scroll-mr-12">
        {videos.map((video) => (
          <MovieCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </section>
  );
}
