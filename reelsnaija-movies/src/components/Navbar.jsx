// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // state for hamburger
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery("");
      setMenuOpen(false); // close menu after search on mobile
    }
  };

  return (
    <nav className="bg-yellow-500 w-full px-4 sticky top-0 z-50">
      <div className="flex items-center justify-between md:justify-normal">
        {/* Logo */}
      <Link to="/" className="basis-1/5 md:basis-1/5 lg:basis-1/5">
      <img 
      src="../reelslogo.png"
      alt="reelsnaija logo"
      className="h-25 w-auto" 
      />
      </Link>

      {/* Hamburger Button (visible on small screens) */}
      <button
        className=" md:hidden  text-white text-4xl border p-2 rounded hover:bg-red-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Links */}
      <div
        className={`${ 
          menuOpen ? "flex" : "hidden"
        } flex-col absolute top-16 left-0 w-full bg-yellow-500 p-6 space-y-4 md:space-y-0 md:static md:flex md:flex-row md:gap-6 my-10 px-10`}
      >
        <div className="flex md:basis-3/5 lg:basis-3/5 justify-center gap-6 text-xl font-medium">
        <Link
          to="/"
          className="text-white hover:text-red-500 "
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-red-500"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-red-500"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        </div>

        {/* Search inside mobile menu */}
        <form onSubmit={handleSearch} className="md:hidden flex items-center justify-between border rounded-2xl mt-10 p-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="px-3 py-1 rounded-lg text-black"
          />
          <button
            type="submit"
            className="ml-2 bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700"
          >
            🔍
          </button>
        </form>
      </div>
        
      

      {/* Search (hidden on mobile, visible on md+) */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center basis-1/5 md:1/5 lg:basis-1/5 border rounded-2xl p-2"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="px-3 py-1 rounded-lg text-black"
        />
        <button
          type="submit"
          className="ml-2 bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700"
        >
          🔍
        </button>
      </form>
      </div>
    </nav>
  );
}
