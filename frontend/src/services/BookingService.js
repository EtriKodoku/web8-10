const BOOKINGS_KEY = 'bookings';

export const BookingService = {
  getBookings: () => {
    const data = localStorage.getItem(BOOKINGS_KEY);
    return data ? JSON.parse(data) : [];
  },

  getBookingsByMovieId: (movieId) => {
    return BookingService.getBookings().filter(b => b.movieId === movieId);
  },

  saveBooking: (booking) => {
    const all = BookingService.getBookings();
    all.push(booking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(all));
  }
};
