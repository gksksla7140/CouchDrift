json.hosting do
  json.partial! '/api/hostings/hosting', hosting: @hosting
end

# @hosting.reviews.includes(:author).each do |review|
#
#   json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end
#
#   json.authors do
#     json.set! review.author.id do
#       json.extract! review.author, :id, :username
#     end
#   end
# end
#
# json.host do
#   json.set! @hosting.host.id do
#     json.extract! @hosting.host, :id, :username, :fname, :lname, :about, :sex, :age
#   end
# end
