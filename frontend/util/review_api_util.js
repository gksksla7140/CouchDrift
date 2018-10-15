export const fetchReviews = (id) =>(
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: { hosting_id: id },
  })
);

export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review },
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  })
);
