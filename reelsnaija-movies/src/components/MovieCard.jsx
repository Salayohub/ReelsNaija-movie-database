const MovieCard = ({ videoId, title, thumbnail }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform">
      <img
        src={thumbnail}
        alt={title}
        className="rounded-lg w-full h-40 object-cover"
      />
      <h3 className="text-sm mt-2 text-white line-clamp-2">{title}</h3>
    </div>
  );
};

export default MovieCard;
