import React from 'react';
import '../styles/MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
      <p><strong>Сеанс:</strong> {new Date(movie.time).toLocaleString()}</p>
      <Link to={`/booking/${movie.id}`}>
        <button className='book-button'>Забронювати</button>
      </Link>
    </div>
  );
};

export default MovieCard;
