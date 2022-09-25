class Category < ApplicationRecord
  validates :code, uniqueness: true, presence: true
  validates :name, presence: true

  scope :order_name, -> { order(:name) }
end
