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



  Hosting.create(
    host_id: User.last.id,
    address: 'fake address',
    long: -73.989308,
    lat: 40.741895,
    description: 'hello'
  )
