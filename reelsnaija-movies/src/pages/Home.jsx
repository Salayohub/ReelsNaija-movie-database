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
      <div className="text-center w-full flex flex-col gap-15 py-3 pt-17  mb-3.5 border rounded-2xl">
      <h1 className="text-yellow-300 font-bold text-2xl">Recommended For You</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Trending Nollywood" title="" />
      <MovieRow query="Epic Nollywood Movies" title="" />
      </div>

      <div className="text-center w-full flex flex-col gap-15 py-3 pt-17 mb-3.5">
      <h1 className="text-yellow-300 font-bold text-2xl">Latest Yoruba Movies</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Yoruba Movies" title=""  />
      </div>

      <DiscoveryBanner />

     <div className="text-center w-full flex flex-col gap-15 py-3 pt-10 mb-6">
  <h1 className="text-yellow-300 font-bold text-2xl">Recommended Romance</h1>
  <p className="text-xs">
    Handpicked just for you from the hottest Nollywood hits to global blockbusters.
    <br />These are movies you won’t want to miss.
  </p>
 <MovieRow query="Romantic Nollywood Movies" title="" />

</div>


       <div className="text-center w-full flex flex-col gap-15 py-3 pt-17 mb-3.5 border rounded-2xl">
      <h1 className="text-yellow-300 font-bold text-2xl">Comedy Series</h1>
      <p className="text-xs ">Handpicked just for you from the hottest Nollywood hits to
        global blockbusters.<br />This are movies you dont won't want to miss.
      </p>
      <MovieRow query="Nigerian Comedy" title="" />
      </div>
      <JoinCommunity />
      
    </div>
  );
}
