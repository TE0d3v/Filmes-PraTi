// src/pages/HomePage.jsx
import MovieRow from '../components/MovieRow';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <MovieRow title="Sugestões de Heróis" searchTerm="marvel" />
      <MovieRow title="Comedia" searchTerm="comedy" />
      <MovieRow title="Animações Populares" searchTerm="dreamworks" />
      <MovieRow title="Ficção Científica" searchTerm="matrix" />
      <MovieRow title="Musicais" searchTerm="musical" />
    </div>
  );
};

export default HomePage;