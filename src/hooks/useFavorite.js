// src/hooks/useFavorites.js
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const FAVORITES_KEY = 'movieAppFavorites';

export const useFavorite = () => {

  const [favoritos, setFavoritos] = useState(() => {
    try {
      const itensSalvos = localStorage.getItem(FAVORITES_KEY);
      return itensSalvos ? JSON.parse(itensSalvos) : [];
    } catch (error) {
      console.error('Erro ao ler favoritos do localStorage', error);
      return [];
    }
  });


  useEffect(() => {
    try {

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritos));
    } catch (error) {
      console.error('Erro ao salvar favoritos no localStorage', error);
    }
  }, [favoritos]);


  const adicionarFavorito = (filme) => {

    if (!favoritos.some(fav => fav.imdbID === filme.imdbID)) {
      setFavoritos((favoritosAnteriores) => [...favoritosAnteriores, filme]);
      toast.success(`${filme.Title} adicionado aos favoritos!`);
    } else {
      toast.error(`${filme.Title} já está nos favoritos.`);
    }
  };


  const removerFavorito = (imdbID) => {

    const filmeRemovido = favoritos.find(filme => filme.imdbID === imdbID);

    setFavoritos((favoritosAnteriores) =>
      favoritosAnteriores.filter((filme) => filme.imdbID !== imdbID)
    );

    if (filmeRemovido) {
      toast.error(`${filmeRemovido.Title} removido dos favoritos.`);
    }
  };


  const eFavorito = (imdbID) => {
    return favoritos.some((filme) => filme.imdbID === imdbID);
  };


  return { favoritos, adicionarFavorito, removerFavorito, eFavorito };
};