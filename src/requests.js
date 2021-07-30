const API_KEY = "21c1ae9bce68954561c41486e4d59b11";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  //fetchDiscover: `https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
};
export default requests;
