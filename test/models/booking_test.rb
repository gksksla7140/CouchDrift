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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
