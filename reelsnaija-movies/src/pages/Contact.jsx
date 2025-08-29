// pages/Contact.jsx
import React from "react";
import Hero from "../components/Hero";
import JoinCommunity from "../components/Community";




export default function Contact() {
  return (
    <section className="w-full">
      <Hero />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-300">
        Got questions, feedback, or partnership ideas? We’d love to hear from you!  
        Fill out the form below or reach us directly.
      </p>

      <form className="grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        ></textarea>
        <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-gray-400 text-sm">
        <p>Email: support@reelnaija.com</p>
        <p>Phone: +234 800 123 4567</p>
        <p>Location: Lagos, Nigeria</p>
      </div>
      <JoinCommunity />
    </section>
  );
}
