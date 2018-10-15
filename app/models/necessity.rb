# == Schema Information
#
# Table name: necessities
#
#  id          :bigint(8)        not null, primary key
#  hosting_id  :integer          not null
#  wifi        :boolean          default(FALSE)
#  shower      :boolean          default(FALSE)
#  TV          :boolean          default(FALSE)
#  bathroom    :boolean          default(FALSE)
#  blanket     :boolean          default(FALSE)
#  electricity :boolean          default(FALSE)
#  pet_allowed :boolean          default(FALSE)
#  laundry     :boolean          default(FALSE)
#  kitchen     :boolean          default(FALSE)
#  max_guest   :integer          default(1)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Necessity < ApplicationRecord

end
