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

class Review < ApplicationRecord
validates :title, :body, :hosting_id, :author_id, presence: true

belongs_to :author,
foreign_key: :author_id,
class_name: :User

belongs_to :hosting





end
