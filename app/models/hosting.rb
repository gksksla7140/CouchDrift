# == Schema Information
#
# Table name: hostings
#
#  id            :bigint(8)        not null, primary key
#  host_id       :integer          not null
#  address       :string           not null
#  long          :float            not null
#  lat           :float            not null
#  img           :string
#  rating        :float            default(0.0)
#  rating_counts :integer          default(0)
#  description   :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Hosting < ApplicationRecord
  validates :address, :long, :lat, :description, presence: true

  has_one :necessity,
  foreign_key: :hosting_id,
  class_name: :Necessity

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User


  has_many :bookings,
  foreign_key: :hosting_id,
  class_name: :Booking

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  has_many :guests,
  through: :bookings,
  source: :guest

  has_many :reviews










end
