import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <Link 
            to={`/${movie.id}`} 
            className="block w-[220px] overflow-hidden bg-gray-100 border border-gray-100 rounded-lg shadow"
        >
            <img
                src={movie.poster}
                alt={movie.name}
                className="object-cover w-full h-[200px] sm:h-[280px] md:h-[300px]"
            />
            <div className="flex flex-col h-full px-3 py-3 pt-1">
                <h2 className="text-lg font-semibold text-gray-900">{movie.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{movie.language}</p>
                <p className="text-xs text-gray-500 mt-2">IMDB: ⭐ {movie.imdbRating} | Release: {movie.releaseDate}</p>
            </div>
        </Link>
  );
};

export default MovieCard;