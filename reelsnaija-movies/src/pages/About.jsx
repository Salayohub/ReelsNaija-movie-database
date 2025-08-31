// pages/About.jsx
import React from "react";
import JoinCommunity from "../components/Community";




export default function About() {
  return (
    <section className=" w-full">
      <div className="bg-[url(../banner3.png)] h-80 bg-cover bg-center bg-no-repeat mb-11">
         </div>
      <h1 className="text-amber-300 text-5xl text-center font-bold mb-6">About ReelNaija</h1>

      <p className="mb-6 text-gray-300  text-center md:px-80">
        At <span className="font-semibold text-yellow-300  ">ReelNaija</span>, we believe African stories deserve a global stage.  
        At ReelNaija, we believe great stories deserve to be seen, shared, and celebrated. Born from a love for African cinema and a passion for world-class storytelling, our platform connects movie lovers across Nigeria and the African continent with films that inspire, entertain, and spark conversation.
Whether it’s the latest Nollywood hit, a timeless African classic, or a trending blockbuster from across the globe, we handpick and recommend movies that match your taste. Our team is dedicated to curating diverse genres — from heartwarming dramas and laugh-out-loud comedies to edge-of-your-seat thrillers and mind-bending adventures.
But ReelNaija is more than just a movie recommendation site — it’s a growing community of film enthusiasts. We invite you to explore, watch, and share. Because every movie you discover here could become your next all-time favorite.
🎬 ReelNaija — where African stories meet global screens.</p>

      <p className="mb-6 text-gray-300 text-center">
        We’re more than just a recommendation site. ReelNaija is a growing community of film lovers across Nigeria  
        and Africa, <br />helping you discover your next favorite movie — one recommendation at a time.
      </p>
<div className="flex gap-10 mb-5 ">
      <div className="mt-8 bg-none p-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">🎯 Our Mission</h2>
        <p className="text-gray-300">
          To celebrate African cinema while connecting it with global audiences.  
          We aim to be the go-to hub for Nollywood and African film recommendations,  
          making it easier for movie lovers to explore, enjoy, and share.
        </p>
      </div>

       <div className="mt-8 bg-none p-6 rounded-lg border-4 border-red-400 hover:translate-1.5 shadow-md">
        <h2 className="text-xl font-bold mb-4">🎯 Our Mission</h2>
        <p className="text-gray-300">
          To celebrate African cinema while connecting it with global audiences.  
          We aim to be the go-to hub for Nollywood and African film recommendations,  
          making it easier for movie lovers to explore, enjoy, and share.
        </p>
      </div>
      </div>
      <JoinCommunity />
    </section>
  );
}
