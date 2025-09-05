// src/components/MovieRow.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';
import MovieCard from './MovieCard';

const MovieRow = ({ title, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await api.get('/', { params: { s: searchTerm } });
        if (response.data.Response === 'True') {

          const moviesWithPosters = response.data.Search.filter(
            (movie) => movie.Poster !== 'N/A'
          );
          setMovies(moviesWithPosters);
        }
      } catch (error) {
        console.error(`Erro ao buscar a categoria ${title}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm, title]);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="max-w-[200px] flex-shrink-0">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieRow;