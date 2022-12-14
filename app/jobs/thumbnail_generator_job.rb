class ThumbnailGeneratorJob < ApplicationJob
  queue_as :default

  SIZES = {
    small: '64x64',
    medium: '128x128',
    large: '256x256'
  }.freeze

  def perform(video)
    SIZES.keys.each { |ssize| generate_thumbnail video, ssize }
  end

  def generate_thumbnail(video, ssize)
    size  = SIZES[ssize]
    image = video.clip.preview(resize: size).processed.image
    field = "thumbnail_#{ssize}=".to_sym

    thumbnail = VideoThumbnail.find_or_create_by(video_id: video.id)
    encoded = Base64.encode64(image.download)
    thumbnail.send field, encoded
    thumbnail.save
  end
end
