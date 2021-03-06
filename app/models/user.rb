# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string
#  lname           :string
#  hosting         :boolean          default(TRUE)
#  about           :string
#  age             :integer
#  sex             :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

 validates :username, :email, :password_digest, :session_token, presence: true
 validates :email, :username, uniqueness: true
 validates :password, length: { minimum: 6 }, allow_nil: true

 after_initialize :ensure_session_token

  has_many :reviews,
  foreign_key: :author_id

  has_many :bookings,
  foreign_key: :guest_id,
  class_name: :Booking

  has_many :guest,
  through: :bookings,
  source: :guest

  has_many :hostings,
  foreign_key: :host_id,
  class_name: :Hosting







 def self.find_by_credentials(email, password)
   user = User.find_by(email: email)
   return nil unless user
   user.is_password?(password) ? user : nil
 end

 def password=(password)
   @password = password
   self.password_digest = BCrypt::Password.create(password)
 end

 def is_password?(password)
   BCrypt::Password.new(self.password_digest).is_password?(password)
 end

 def reset_session_token!
   generate_unique_session_token
   save!
   self.session_token
 end

 private

 def ensure_session_token
   generate_unique_session_token unless self.session_token
 end

 def new_session_token
   SecureRandom.urlsafe_base64
 end

 def generate_unique_session_token
   self.session_token = new_session_token
   while User.find_by(session_token: self.session_token)
     self.session_token = new_session_token
   end
   self.session_token
 end
end
