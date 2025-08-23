// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-start px-10"
      style={{ backgroundImage: `url('https://i.ibb.co/5FRwQkP/nollywood-banner.jpg')` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Discover Nollywood & Beyond</h1>
        <p className="mb-6 text-lg">
          Your one-stop platform for Nollywood, African classics, and global blockbusters.
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">Watch Now</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800">Add to List</button>
        </div>
      </div>
    </section>
  );
}
