
import axios from 'axios';

const apiKey = import.meta.env.VITE_OMDB_API_KEY;


if (!apiKey) {
  throw new Error("A chave da API do OMDb (VITE_OMDB_API_KEY) não foi encontrada. Verifique seu arquivo .env");
}

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: apiKey,
  },
});

export default api;