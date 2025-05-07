import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
      <p><strong>Сеанс:</strong> {new Date(movie.time).toLocaleString()}</p>
    </div>
  );
};

export default MovieCard;
