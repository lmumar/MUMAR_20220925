class CreateVideoThumbnails < ActiveRecord::Migration[7.0]
  def change
    create_table :video_thumbnails do |t|
      t.references :video
      t.binary :thumbnail_small, :thumbnail_medium, :thumbnail_large
      t.timestamps
    end
  end
end
