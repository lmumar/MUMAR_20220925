# frozen_string_literal: true

class VideosController < ApplicationController
  def create
    @video = Video.create(video_params)

    return unless @video.errors.present?

    respond_with_error details: @video.errors.to_h
  end

  private

  def video_params
    params.require(:video).permit(:title, :category_id, :clip)
  end

  def respond_with_error(details:, code: 'error.validation', status: :bad_request)
    render(
      json: {
        code:,
        details:
      },
      status:
    )
  end
end
