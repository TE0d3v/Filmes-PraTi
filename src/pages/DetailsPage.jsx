
import { useFavorite } from '../hooks/useFavorite';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { adicionarFavorito, removerFavorito, eFavorito } = useFavorite();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get('/', { params: { i: id } });

        if (response.data.Response === 'True') {
          setMovie(response.data);
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError('Ocorreu um erro ao buscar os detalhes do filme.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) { /* ... */ }
  if (error) { /* ... */ }
  if (!movie) { return null; }

  const isMovieFavorite = eFavorito(movie.imdbID);

  const handleFavoriteClick = () => {
    if (isMovieFavorite) {
      removerFavorito(movie.imdbID);
    } else {
      adicionarFavorito(movie);
    }
  };

  const poster = movie.Poster === 'N/A' ? 'https://via.placeholder.com/500x750?text=Sem+Imagem' : movie.Poster;

  return (
    <div>
      <Link to="/" className="text-sky-400 hover:text-sky-300 mb-6 inline-block">
        &larr; Voltar para a busca
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={poster} alt={`Pôster de ${movie.Title}`} className="w-full md:w-1/3 rounded-lg shadow-lg"/>
        <div className="flex-1">
          {/* ... (todo o código que mostra os detalhes do filme) ... */}
          <h1 className="text-4xl font-bold mb-2">{movie.Title}</h1>
          <div className="flex items-center gap-4 text-slate-400 mb-4">
            <span>{movie.Year}</span>
            <span>&bull;</span>
            <span>{movie.Rated}</span>
            <span>&bull;</span>
            <span>{movie.Runtime}</span>
          </div>
          <p className="text-lg mb-6">{movie.Plot}</p>
          <div className="space-y-3">
            <p><strong>Gênero:</strong> {movie.Genre}</p>
            <p><strong>Diretor:</strong> {movie.Director}</p>
            <p><strong>Atores:</strong> {movie.Actors}</p>
            <p><strong>Avaliação IMDb:</strong> {movie.imdbRating} / 10</p>
          </div>

          {/* 4. Adicione o botão de favoritar aqui */}
          <button
            onClick={handleFavoriteClick}
            className={`mt-6 w-full py-3 rounded-lg font-bold transition-colors ${
              isMovieFavorite
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-sky-500 hover:bg-sky-600'
            }`}
          >
            {isMovieFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;