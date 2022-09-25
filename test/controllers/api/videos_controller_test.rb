require 'test_helper'

class Api::VideosControllerTest < ActionDispatch::IntegrationTest
  test 'can upload video' do
    post api_videos_path, params: {
      video: {
        title: 'Earth',
        category_id: categories(:education).id,
        clip: fixture_file_upload('earth.mov', 'movie/quicktime')
      },
      format: 'json'
    }

    video = Video.last
    assert video.clip.attached?
  end
end
