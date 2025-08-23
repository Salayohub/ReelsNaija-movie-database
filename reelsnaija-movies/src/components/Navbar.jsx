// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery("");
    }
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-red-600">ReelNaija</Link>

      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/about" className="hover:text-red-500">About</Link>
        <Link to="/contact" className="hover:text-red-500">Contact</Link>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="px-3 py-1 rounded-lg text-black"
        />
        <button type="submit" className="ml-2 bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700">
          🔍
        </button>
      </form>
    </nav>
  );
}
