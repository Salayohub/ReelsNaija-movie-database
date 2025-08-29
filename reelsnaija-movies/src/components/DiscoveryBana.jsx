const DiscoveryBanner = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left side: Video */}
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full h-64 lg:h-80 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right side: Text + Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Discover the Best of Nollywood & African Cinema 🎬
          </h2>
          <p className="text-gray-300 mb-6">
            Dive into the world of African storytelling. From heartwarming dramas to thrilling action, ReelNaija brings you movies that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
              Watch Now
            </button>
            <button className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryBanner;
