import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import AboutHome from "../components/AboutHome";
import JoinCommunity from "../components/Community";
import DiscoveryBanner from "../components/DiscoveryBana";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutHome />
      <div className="text-center w-full flex flex-col gap-3 bg-amber-600 pt-17 mb-3.5">
      <h1 className="text-yellow-300 font-bold text-2xl">Recommended Movies</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
      <MovieRow title="" fetchQuery="Nollywood movies" />
      </div>

      <div className="text-center w-full flex flex-col gap-3 bg-amber-600 pt-17 mb-3.5">
      <h1 className="text-yellow-300 font-bold text-2xl">Trending Nollywood</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Nollywood movies 2025" title="" />
      </div>

      <DiscoveryBanner />

       <div className="text-center w-full flex flex-col gap-3 bg-amber-600 pt-17 mb-3.5">
      <h1 className="text-yellow-300 font-bold text-2xl">Recommended Movies</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
    <MovieRow title="" fetchQuery="African comedy" />
      </div>

       <div className="text-center w-full flex flex-col gap-3 bg-amber-600 pt-17 mb-3.5">
      <h1 className="text-yellow-300 font-bold text-2xl">Recommended Movies</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
      <MovieRow title="" fetchQuery="Nollywood action movies" />
      </div>
      <JoinCommunity />
      
    </div>
  );
}
