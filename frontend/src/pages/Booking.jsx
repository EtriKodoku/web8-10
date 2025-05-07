import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookingService } from '../services/BookingService';
import CinemaHall from '../components/CinemaHall'; // Додано для відображення залу
import "../styles/Booking.css"
import { toast } from 'react-toastify';

const Booking = () => {
  const { id: movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const bookings = BookingService.getBookingsByMovieId(movieId);
    const booked = bookings.flatMap(b => b.seats);
    setBookedSeats(booked);
  }, [movieId]);

  const handleSelectSeats = (selectedSeats) => {
    setSelectedSeats(selectedSeats);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !phone || !email) {
      toast.error('Усі поля є обов’язковими!');
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error('Невірний формат email!');
      return false;
    }
    if (selectedSeats.length === 0) {
      toast.error('Оберіть хоча б одне місце!');
      return false;
    }
    return true;
  };

  const handleBooking = () => {
    if (!validateForm()) return;

    BookingService.saveBooking({
      movieId,
      ...formData,
      seats: selectedSeats
    });

    toast.success('Бронювання успішно збережене!');
    setSelectedSeats([]);
    setFormData({ name: '', phone: '', email: '' });
    const updated = BookingService.getBookingsByMovieId(movieId).flatMap(b => b.seats);
    setBookedSeats(updated);
  };

  return (
    <div className="booking-container">
      <CinemaHall movieId={movieId} bookedSeats={bookedSeats} onSelect={handleSelectSeats} />

      <h3 className='text'>Форма бронювання</h3>
      <div className="booking-form">
        <input type="text" name="name" placeholder="Ім’я" value={formData.name} onChange={handleInput} />
        <input type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleInput} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInput} />
        <button onClick={handleBooking}>Забронювати</button>
      </div>
    </div>
  );
};

export default Booking;
