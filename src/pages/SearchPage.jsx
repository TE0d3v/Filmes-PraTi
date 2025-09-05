
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); 

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return; 

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get('/', { params: { s: query } });
        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
          setError(response.data.Error);
        }
      } catch (err) {
        setError('Ocorreu um erro ao realizar a busca.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]); 

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Resultados para: <span className="text-sky-400">{query}</span>
      </h2>

      {loading && <p className="text-lg">Carregando...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;