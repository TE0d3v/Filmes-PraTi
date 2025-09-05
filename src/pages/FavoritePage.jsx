
import { useFavorite } from '../hooks/useFavorite';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
  const { favoritos } = useFavorite();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Meus Filmes Favoritos</h2>

      {}
      {favoritos.length === 0 ? (
        <p className="text-lg text-slate-400">
          Você ainda não adicionou nenhum filme aos favoritos.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favoritos.map((filme) => (
            <MovieCard key={filme.imdbID} movie={filme} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;