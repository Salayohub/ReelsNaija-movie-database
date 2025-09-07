// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import MovieDetail from "./pages/MovieDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-green-700 py-2 px-4 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
    
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
