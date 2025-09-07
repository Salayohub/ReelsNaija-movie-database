// pages/Contact.jsx
import React from "react";
import Hero from "../components/Hero";
import JoinCommunity from "../components/Community";




export default function Contact() {
  return (
    <section className="w-full">
     <div className="bg-[url(/banner1.png)] h-80 bg-cover bg-center bg-no-repeat mb-11">
         </div>

      <div className="w-full text-center">  
      <h1 className="text-amber-300 text-5xl text-center font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-300">
        Got questions, feedback, or partnership ideas? We’d love to hear from you! <br />  
        Fill out the form below or reach us directly.
      </p>
      </div> 

    <div className=" w-full grid grid-cols-1 gap-10 justify-center items-center pb-24">

      <div className="flex flex-col items-center w-full p-5 border rounded-lg"> 
      <h2 className="text-amber-300 text-3xl text-center font-bold mb-6">  Fill Out The Form Below</h2>
      <form className="grid gap-6 w-full h-auto md:w-1/2">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 h-19 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 h-19 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-gray-800 h-74 text-white focus:outline-none"
        ></textarea>
        <button className="bg-red-600 px-6 py-3 rounded-lg h-19 font-semibold hover:bg-red-700">
          Send Message
        </button>
      </form>
</div>
      <div className=" flex flex-col justify-center items-center basis-1/2 p-5 gap-5 border rounded-lg">
      <h2 className="text-amber-300 text-3xl text-center font-bold mb-6">Reach Us Directly</h2>
        <p className="text-white md:font-semibold text-3xl">Email: support@reelnaija.com</p>
        <p className="text-white md:font-semibold text-3xl">Phone: +234 800 123 4567</p>
        <p className="text-white md:font-semibold text-3xl">Location: Lagos, Nigeria</p>
      </div>

      </div>
      <JoinCommunity />
    </section>
  );
}
