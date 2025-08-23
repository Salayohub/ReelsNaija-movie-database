// hooks/useYoutubeSearch.js
import { useEffect, useState } from "react";
import { searchVideos } from "../utils/Youtube";

export default function useYoutubeSearch(query) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await searchVideos(query);
        setVideos(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { videos, loading, error };
}
