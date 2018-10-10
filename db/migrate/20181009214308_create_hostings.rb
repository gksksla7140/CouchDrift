class CreateHostings < ActiveRecord::Migration[5.1]
  def change
    create_table :hostings do |t|
      t.integer :host_id, null: false
      t.integer :city_id, null: false
      t.string :address, null: false
      t.float :long, null: false
      t.float :lat, null: false
      t.string :img
      t.float :rating, default: 0
      t.integer :rating_counts, default: 0
      t.string :description, null: false
      t.timestamps
    end
    add_index :hostings, :host_id 
  end
end
