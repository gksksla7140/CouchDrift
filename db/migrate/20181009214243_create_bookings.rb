class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :hosting_id, null: false
      t.integer :guest_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false

      t.timestamps
    end
    add_index :bookings, :hosting_id
    add_index :bookings, :guest_id
  end
end
