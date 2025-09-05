// src/components/Header.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return; 

   
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm(''); 
  };

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 gap-4 flex-wrap">
        <Link to="/">
          <h1 className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
            Meu App de Filmes
          </h1>
        </Link>

        {}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar por um filme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-700 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 rounded-md px-4 py-1 font-bold transition-colors"
          >
            Buscar
          </button>
        </form>

        <nav>
          <Link
            to="/favorites"
            className="text-lg font-medium hover:text-sky-400 transition-colors"
          >
            Favoritos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;