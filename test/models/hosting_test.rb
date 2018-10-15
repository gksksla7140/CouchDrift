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
#  wifi          :boolean          default(TRUE)
#  shower        :boolean          default(TRUE)
#  TV            :boolean          default(TRUE)
#  bathroom      :boolean          default(TRUE)
#  blanket       :boolean          default(TRUE)
#  electricity   :boolean          default(TRUE)
#  pet_allowed   :boolean          default(TRUE)
#  laundry       :boolean          default(TRUE)
#  kitchen       :boolean          default(TRUE)
#  max_guest     :integer          default(1)
#

require 'test_helper'

class HostingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
