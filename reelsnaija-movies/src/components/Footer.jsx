import { Link } from "react-router-dom";

export default function Footer() {
  const logo =
    "https://via.placeholder.com/150x50?text=ReelNaija"; // replace with your logo asset

  return (
    <footer className="bg-yellow-500 text-gray-300 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          {logo ? (
            <img src='/reelslogo.png' alt="ReelNaija Logo" className="h-50 mb-4" />
          ) : null}
          <p className="text-sm text-white">
            ReelNaija brings you the best of Nollywood and African cinema,
            keeping you entertained with movie picks you’ll love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-red-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Join Our Community</h3>
          <form className="flex flex-col sm:flex-row sm:items-center border">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-3 py-2 bg-amber-50 rounded-lg border-b-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-green-500 text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ReelNaija. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
