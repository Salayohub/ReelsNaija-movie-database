import { useState } from "react";

const FooterSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return alert("Please enter a movie or video title.");
    console.log("Searching for:", query);
    setQuery(""); // reset after search
  };

  return (
    <div className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Quick Search</h3>
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition w-full sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterSearch;
