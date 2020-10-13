export const API_KEY = "b9e04ffd5a10a79d0459e43247be7805";
export const TMDB_API_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p";
export const LANGUAGE = "en-US";
export const DEFAULT_QUERY = `?api_key=${API_KEY}&language=${LANGUAGE}&include_adult=false`;
export const POPULAR_MOVIES_URL = `${TMDB_API_URL}/movie/popular${DEFAULT_QUERY}`;
export const POPULAR_TV_SHOWS_URL = `${TMDB_API_URL}/tv/popular${DEFAULT_QUERY}`;
