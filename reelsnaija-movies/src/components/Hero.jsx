import { useEffect, useState } from "react";

export default function Hero() {
  // Background images (you can fetch from TMDB later)
  const backgrounds = [
    "https://media.themoviedb.org/t/p/w500_and_h282_face/mEW9XMgYDO6U0MJcIRqRuSwjzN5.jpg",
    "https://media.themoviedb.org/t/p/w500_and_h282_face/9ZhhlJbtLmzjvdbxbNzHZEBFdIZ.jpg",
    "https://media.themoviedb.org/t/p/w500_and_h282_face/fBlzTwgtbDYkDKlhnPu69jHfVGy.jpg",
    "https://media.themoviedb.org/t/p/w500_and_h282_face/2SdwooNx8Ny8BfruWsbDBbaQpJT.jpg",
    "https://media.themoviedb.org/t/p/w500_and_h282_face/hTYfahH0QbWUVmul3l9rVhuayjE.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Auto-change background every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-start px-10 transition-all duration-1000"
      style={{ backgroundImage: `url(${backgrounds[current]})` }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Discover Nollywood & Beyond
        </h1>
        <p className="mb-6 text-lg">
          Your one-stop platform for Nollywood, African classics, and global blockbusters.
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
            Watch Now
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800">
            Add to List
          </button>
        </div>
      </div>
    </section>
  );
}
