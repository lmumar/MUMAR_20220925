class Category < ApplicationRecord
  has_many :videos

  validates :code, uniqueness: true, presence: true
  validates :name, presence: true

  scope :order_name, -> { order(:name) }
end
