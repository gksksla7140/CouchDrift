class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :hosting_id, null: false
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :body, null: false
    end
    add_index :reviews, :hosting_id
    add_index :reviews, :author_id

  end
end
