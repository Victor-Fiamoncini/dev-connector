class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, length: {maximum: 50}
  validates :password, presence: true, length: {minimum: 6}
  validates :email,
    presence: true,
    length: {maximum: 260},
    format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i},
    uniqueness: {case_sensitive: false}

  before_save {self.email = email.downcase}
end
