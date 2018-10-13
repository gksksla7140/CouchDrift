# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  hosting_id :integer          not null
#  guest_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :hosting,
  foreign_key: :hosting_id,
  class_name: :Hosting


end
