class VideoThumbnailsController < ApplicationController
  def show
    blob = thumbnail.thumbnail_small
    decoded = Base64.decode64 blob
    send_data decoded, type: 'image/png', disposition: :inline
  end

  private

  def thumbnail
    @thumbnail ||= VideoThumbnail.find_by!(video_id: params[:id])
  end
end
