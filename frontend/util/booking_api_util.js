export const fetchBookings = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/bookings',
    data: { guest_id: id },
  })
);

export const createBooking = (booking) => (
  $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking },
  })
);
