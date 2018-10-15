# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Hosting.delete_all
User.create(username: 'Demo', email: 'demo@demo', password: 'starwars')
Review.delete_all
Necessity.delete_all


Faker::UniqueGenerator.clear
20.times do |i|
  gen =['M', 'F']

  user = User.create(
    username: Faker::OnePiece.unique.character,
    email: Faker::Internet.email,
    password: 'starwars',
    about: Faker::OnePiece.quote,
    age: rand(20..80),
    sex: gen.sample,
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name
  )
  host =Hosting.create(
    host_id: User.last.id,
    address: Faker::Address.street_address,
    long: rand(-122.5100000..-122.3000000),
    lat: rand(37.70000000..37.8000000),
    description: Faker::Movie.quote,
    rating: rand(0...5),
    rating_counts: rand(1..100)
  )
  Necessity.create(
    hosting_id: host.id
  )

  if i == 1
  else
    Review.create!(
      hosting_id: host.id,
      author_id: user.id,
      title: 'very good hosting',
      body: 'I am the owner hehe'
    )
  end
end
