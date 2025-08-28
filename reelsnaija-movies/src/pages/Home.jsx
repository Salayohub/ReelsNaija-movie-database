import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import AboutHome from "../components/AboutHome";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutHome />
      <div>
      <h1 >Recommended Movies</h1>
      <p>Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Nollywood movies 2025" title="Trending Nollywood" />
      </div>

      <div>
        <h1 >Recommended Movies</h1>
      <p>Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Nigerian comedy movies" title="Comedy" />
      </div>

       <div>
        <h1 >Recommended Movies</h1>
      <p>Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Nigerian action movies" title="Action" />
      </div>

       <div>
        <h1 >Recommended Movies</h1>
      <p>Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Nigerian romance movies" title="Romance" />
      </div>
      
    </div>
  );
}
