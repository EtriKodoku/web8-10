import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CinemaHall from '../components/CinemaHall';
import movies from '../data/movies';
import '../styles/CinemaHall.css';

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    // Отримання заброньованих місць із localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || {};
    const booked = storedBookings[id] || [];
    setBookedSeats(booked);
  }, [id]);

  const handleSelectSeats = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <div className="booking-page">
      <h1>Бронювання: {movie.title}</h1>
      <CinemaHall bookedSeats={bookedSeats} onSelect={handleSelectSeats} />
      <div className="text" style={{ marginTop: '20px'}}>
        <h3>Вибрані місця:</h3>
        {selectedSeats.length > 0 ? (
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat}>{seat}</li>
            ))}
          </ul>
        ) : (
          <p>Немає вибраних місць</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
