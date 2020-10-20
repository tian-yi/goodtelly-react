export const API_KEY = "b9e04ffd5a10a79d0459e43247be7805";
export const TMDB_API_URL = "https://api.themoviedb.org/3/";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/";
export const DEFAULT_QUERY = `?api_key=${API_KEY}&language=en-US&include_adult=false`;
export const POPULAR_MOVIE_URL = `${TMDB_API_URL}movie/popular${DEFAULT_QUERY}`;
export const POPULAR_TV_URL = `${TMDB_API_URL}tv/popular${DEFAULT_QUERY}`;
export const SEARCH_MOVIE_URL = `${TMDB_API_URL}search/movie${DEFAULT_QUERY}`;
