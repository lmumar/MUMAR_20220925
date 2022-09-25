# frozen_string_literal: true

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  test 'validation should fail if type is invalid' do
    video = videos(:earth)
    path = Rails.root.join('test/fixtures/files/anya.jpeg')
    video.clip.attach(
      io: File.open(path),
      filename: 'anya.jpeg',
      content_type: 'image/jpeg'
    )
    assert_not(video.valid?)
  end

  test 'accepts mov or mp4' do
    [
      {
        name: 'earth',
        filename: 'earth.mov',
        content_type: 'video/quicktime'
      },
      {
        name: 'bunny',
        filename: 'bunny.mp4',
        content_type: 'video/mp4'
      }
    ].each do |attrs|
      video = videos(attrs[:name].to_sym)
      path = Rails.root.join("test/fixtures/files/#{attrs[:filename]}")
      video.clip.attach(
        io: File.open(path),
        filename: attrs[:filename],
        content_type: attrs[:content_type]
      )
      assert(video.valid?)
    end
  end
end
