# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
pictures =[
  'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271734/pexels-photo-271734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/269262/pexels-photo-269262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1234462/pexels-photo-1234462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/263189/pexels-photo-263189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271648/pexels-photo-271648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/276511/pexels-photo-276511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271724/pexels-photo-271724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/276599/pexels-photo-276599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271674/pexels-photo-271674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/271734/pexels-photo-271734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

]
necessities = [true, false]
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Hosting.delete_all
User.create(username: 'Demo', email: 'demo@demo', password: 'starwars', fname:'Iamthe', lname:'DemoUser', sex:'M', about:'I am demo user?')
Review.delete_all
Necessity.delete_all


Faker::UniqueGenerator.clear
20.times do |i|
  gen =['M', 'F']

  user = User.create!(
    username: Faker::OnePiece.unique.character,
    email: Faker::Internet.email,
    password: 'starwars',
    about: Faker::OnePiece.quote,
    age: rand(20..80),
    sex: gen.sample,
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name
  )
  host =Hosting.create!(
    host_id: User.last.id,
    img_url: pictures[i],
    address: Faker::Address.street_address,
    long: rand(-122.5100000..-122.3000000),
    lat: rand(37.70000000..37.8000000),
    description: 'Brand new apartment, completely renovated in 2012 and tastefully furnished, with attention to details, modern colours, designer lighting and high quality accessories. Located in the centre of Trastevere, perfect for those looking for a functional and high standard accommodation. ',
    rating: rand(0...5),
    rating_counts: rand(1..100),
    wifi: necessities.sample,
    shower: necessities.sample,
    TV: necessities.sample,
    bathroom: necessities.sample,
    blanket: necessities.sample,
    electricity: necessities.sample,
    pet_allowed: necessities.sample,
    laundry: necessities.sample,
    kitchen: necessities.sample,
    max_guest: rand(0..8)
  )
  Necessity.create!(
    hosting_id: host.id
  )

end
