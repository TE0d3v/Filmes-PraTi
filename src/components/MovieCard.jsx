
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const poster = movie.Poster === 'N/A'
    ? 'https://via.placeholder.com/300x450?text=Sem+Imagem'
    : movie.Poster;

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
      <img
        src={poster}
        alt={`Pôster do filme ${movie.Title}`}
        className="w-full h-[300px] object-cover" 
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold truncate flex-grow" title={movie.Title}>
          {movie.Title}
        </h3>
        <p className="text-slate-400 mb-4">{movie.Year}</p>

        {}
        <Link
          to={`/movie/${movie.imdbID}`}
          className="bg-sky-500 text-center hover:bg-sky-600 rounded-md px-4 py-2 font-bold transition-colors mt-auto"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;