// components/Footer.jsx
import React from "react";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-yellow-500 pt-10 pb-5 grid gap-26 w-full items-center ">
      
      
      <div className="flex flex-wrap ">

       <div className="w-full md:basis-2/5 pr-10 "><img src="../public/reelslogo.png" alt="footerlogo" className="h-50 w-50" /></div> 
       
        <div className=" w-full md:basis-3/5 justify-evenly md:flex flex-wrap  pt-10 pl-10">

        <div className="mb-5"> <p className="text-red-500 font-bold underline text-xl">Menu</p>
          <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
          <br /><a href="/about" className="hover:text-red-500">About Us</a><br />
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </div>
     

      
        <div className="mb-5"> <p className="text-red-500 font-bold underline text-xl">Menu</p>
          <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
          <br /><a href="/about" className="hover:text-red-500">About Us</a><br />
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </div>
      
      

      <div className="mb-5">
        <h2 className="font-bold underline text-xl mb-3">Follow us on social media</h2>
        <p>Your gateway to amazing african and global stories.<br />
        stay connected with us and never miss an update</p>
        <div className="flex mt-8">
          <img src="" alt="fb" />
          <img src="" alt="ig" />
          <img src="" alt="tw" />
        </div>
      </div>
      </div>

      
    </div>
      <p className="text-gray-400 text-center text-sm">© {new Date().getFullYear()} ReelNaija. All rights reserved.</p>
    </footer>
  );
}
