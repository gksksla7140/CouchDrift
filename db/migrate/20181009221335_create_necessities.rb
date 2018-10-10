class CreateNecessities < ActiveRecord::Migration[5.1]
  def change
    create_table :necessities do |t|
      t.integer :hosting_id, null: false
      t.boolean :wifi, default: false
      t.boolean :shower, default: false
      t.boolean :TV, default: false
      t.boolean :bathroom, default: false
      t.boolean :blanket, default: false
      t.boolean :electricity, default: false
      t.boolean :pet_allowed, default: false
      t.boolean :laundry, default: false
      t.boolean :kitchen, default: false
      t.integer :max_guest, default: 1

      t.timestamps
    end
    add_index :necessities, :hosting_id
  end
end
