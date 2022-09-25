class Video < ApplicationRecord
  has_one_attached :clip
  belongs_to :category

  validates :title, presence: true
  validates :clip, attached: true, content_type: %i[mp4 qt], size: { less_than: 201.megabytes }

  scope :order_recent, -> { order(id: :desc) }

  after_commit :generate_thumbnails, on: :create

  private

  def generate_thumbnails
    ThumbnailGeneratorJob.perform_later self
  end
end
