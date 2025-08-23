import Hero from "../components/Hero";
import MovieRow from "../components/MovierRow";

export default function Home() {
  return (
    <div>
      <Hero />
      <MovieRow query="Nollywood movies 2025" title="Trending Nollywood" />
      <MovieRow query="Nigerian comedy movies" title="Comedy" />
      <MovieRow query="Nigerian action movies" title="Action" />
      <MovieRow query="Nigerian romance movies" title="Romance" />
    </div>
  );
}
