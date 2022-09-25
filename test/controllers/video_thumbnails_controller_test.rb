require "test_helper"

class VideoThumbnailsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get video_thumbnails_show_url
    assert_response :success
  end
end
