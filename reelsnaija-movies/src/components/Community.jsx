import { useState } from "react";

const JoinCommunity = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");
    console.log("Subscribed with:", email); 
    setEmail(""); 
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Join Our Community 🎥
        </h2>
        <p className="text-gray-100 mb-6">
          Be the first to know about the latest Nollywood releases, African movie gems, and exclusive recommendations from ReelNaija.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border text-white-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-red-500 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinCommunity;
