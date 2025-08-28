import React from "react";

export default function AboutHome() {
    return(
        <div className=" mt-2.5 p-4 flex flex-wrap justify-start items-center gap-15 ">
            <div className=" w-full md:basis-2/5 bg-amber-300 ">
                <img src="../public/banner2.png" alt=""  className="w-full h-full object-cover rounded-lg shadow-lg"/>
            </div>
            <div className="w-full md:basis-2/5 gap- flex flex-wrap">
                <h2 className="font-bold text-2xl">About ReelsNaija</h2>
                <p className="text-sm justify-center my-4 ">At ReelNaija, we celebrate the magic of
                     African storytelling and
                     the thrill of global cinema. From the latest Nollywood 
                     blockbusters to hidden gems from around the world, we 
                     handpick movies that entertain, inspire, and connect with 
                     you. Our goal is simple — to make your next movie night 
                     unforgettable.</p>
                     <button className="bg-red-500 p-4 rounded-lg">Stream Now</button>
            </div>

        </div>
    )
}