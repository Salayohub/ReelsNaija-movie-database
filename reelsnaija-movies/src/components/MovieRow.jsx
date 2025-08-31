import { useEffect, useRef, useState } from "react";
import { USE_MOCK_DATA } from "../config";
import { mockVideos } from "../mockData";
import { searchVideos } from "../utils/Youtube";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // install lucide-react if not already

const MovieRow = ({ query, title }) => {
  const [videos, setVideos] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (USE_MOCK_DATA) {
      setVideos(mockVideos);
    } else {
      searchVideos(query).then(setVideos).catch(console.error);
    }
  }, [query]);

  // Scroll left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {title && (
        <h2 className="text-xl font-bold text-yellow-400 mb-3 px-4">{title}</h2>
      )}

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Movies Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 pb-3"
      >
        {videos.map((video) => (
          <div key={video.id?.videoId || video.id} className="min-w-[220px] flex-shrink-0">
            <MovieCard video={video} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default MovieRow;
