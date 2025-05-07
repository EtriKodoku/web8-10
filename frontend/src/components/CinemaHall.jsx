import React, { useState } from 'react';
import '../styles/CinemaHall.css';

const ROWS = 5; // або 6, залежно від вашого налаштування
const SEATS_PER_ROW = 8;

function CinemaHall({onSelect, bookedSeats = [] }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    const isSelected = selectedSeats.includes(seat);
    const updatedSeats = isSelected
      ? selectedSeats.filter(s => s !== seat)
      : [...selectedSeats, seat];

    setSelectedSeats(updatedSeats);
    onSelect(updatedSeats); // передаємо обране в батьківський компонент
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < SEATS_PER_ROW; col++) {
        const seat = `R${row + 1}S${col + 1}`;
        const isBooked = bookedSeats.includes(seat);
        const isSelected = selectedSeats.includes(seat);

        seats.push(
          <div
            key={seat}
            className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div className="cinema-container">
      <h2 className='text'>Оберіть місця</h2>
      <div className="seats-grid">
        {renderSeats()}
      </div>
    </div>
  );
}

export default CinemaHall;
