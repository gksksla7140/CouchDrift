# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  hosting_id :integer          not null
#  author_id  :integer          not null
#  title      :string           not null
#  body       :text             not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
