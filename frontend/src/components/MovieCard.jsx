import React from 'react';
import '../styles/MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
        <img src={movie.image} alt={movie.title} className="movie-poster"/>
        <div className="gradient-overlay"></div>
        <div className="movie-info">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-description">{movie.description}</div>
            <div className="movie-session">Сеанс: {new Date(movie.time).toLocaleString()}</div>
            <Link to={`/booking/${movie.id}`}>
                <button className="book-button">Забронювати</button>
            </Link>
        </div>
    </div>
  );
};

export default MovieCard;
