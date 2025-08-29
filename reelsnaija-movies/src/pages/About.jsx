// pages/About.jsx
import React from "react";
import JoinCommunity from "../components/Community";
import Hero from "../components/Hero";



export default function About() {
  return (
    <section className=" w-full">
      <Hero />
      <h1 className="text-3xl font-bold mb-6">About ReelNaija</h1>

      <p className="mb-6 text-gray-300">
        At <span className="font-semibold text-yellow-300">ReelNaija</span>, we believe African stories deserve a global stage.  
        From Nollywood blockbusters to timeless African classics and trending world hits,  
        we connect you with movies that inspire, entertain, and spark conversation.
      </p>

      <p className="mb-6 text-gray-300">
        We’re more than just a recommendation site. ReelNaija is a growing community of film lovers across Nigeria  
        and Africa, helping you discover your next favorite movie — one recommendation at a time.
      </p>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">🎯 Our Mission</h2>
        <p className="text-gray-300">
          To celebrate African cinema while connecting it with global audiences.  
          We aim to be the go-to hub for Nollywood and African film recommendations,  
          making it easier for movie lovers to explore, enjoy, and share.
        </p>
      </div>
      <JoinCommunity />
    </section>
  );
}
