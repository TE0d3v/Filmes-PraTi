// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import FavoritePage from './pages/FavoritePage';
import { Toaster } from 'react-hot-toast';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Toaster position='top-right' />
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<DetailsPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;