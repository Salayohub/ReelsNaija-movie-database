// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center text-sm">
      <p>© {new Date().getFullYear()} ReelNaija. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
        <a href="/about" className="hover:text-red-500">About Us</a>
        <a href="/contact" className="hover:text-red-500">Contact</a>
      </div>
    </footer>
  );
}
