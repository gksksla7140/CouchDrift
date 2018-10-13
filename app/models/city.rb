# == Schema Information
#
# Table name: cities
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  zipcode    :integer          not null
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord

  has_many :hostings,
  foreign_key: :city_id,
  class_name: :Hosting
end
