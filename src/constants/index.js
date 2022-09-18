export const API_KEY = 'fa809a37373ddef79d5c8c13b29c3f4f';

export const base_url= 'https://api.themoviedb.org/3';

export const imageBasePath = 'https://image.tmdb.org/t/p/w500';

export const requests = {
	fetchTrending: `${base_url}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `${base_url}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchSearch: `${base_url}/search/movie?api_key=${API_KEY}&language=en-US`,
};