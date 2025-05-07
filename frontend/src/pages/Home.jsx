import movies from '../data/movies';
import MovieList from '../components/MovieList';

function Home() {
  return (
    <div>
      <h1>Афіша фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
