class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :code, null: false
      t.string :name, null: false

      t.timestamps
      t.index :code, unique: true
      t.index :name
    end
  end
end
