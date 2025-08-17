
# ReelNaija – Movie Recommendation App

ReelNaija is a modern web app built with **React, Vite, and TailwindCSS**, designed to recommend and display movies. It integrates with the **YouTube API** to fetch trailers and related content.

---

##  Features

* 🔎 Search for movies & trailers
* 🎥 Watch YouTube trailers directly inside the app
* ⭐ Recommended movies section
* 📱 Fully responsive UI (TailwindCSS)
* ⚡ Fast build with Vite

---

## Tech Stack

* **Frontend Framework**: React + Vite
* **Styling**: TailwindCSS
* **API**: YouTube Data API v3
* **Deployment**: Vercel / Netlify (recommended)

---

## Project Structure

```
src/
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┣ Banner.jsx
 ┃ ┣ MovieRow.jsx
 ┃ ┣ Footer.jsx
 ┃ ┗ ReviewSection.jsx
 ┣ utils/
 ┃ ┗ youtube.js   # YouTube API helper
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css
```

---

## Installation & Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/reelnaija.git
   cd reelnaija
   ```

2. **Install dependencies**

   ```
   axios
   react-router-dom
  

   ```

3. **Set up YouTube API key**

   * Create a `.env` file in the project root
   * Add:

     ```
     VITE_YOUTUBE_API_KEY=your_api_key_here
     ```

4. **Run the project locally**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## Environment Variables

| Variable               | Description          |
| ---------------------- | -------------------- |
| `VITE_YOUTUBE_API_KEY` | Your YouTube API key |

---

## Contributing

Contributions are welcome! If you’d like to improve features or fix bugs:

1. Fork the repo
2. Create a new branch (`feature/awesome-update`)
3. Commit your changes
4. Open a Pull Request

---

## License

This project is licensed under the **MIT License** – feel free to use and modify.

---

## Author

Built with ❤️ by **Salayo – ReelNaija**

--