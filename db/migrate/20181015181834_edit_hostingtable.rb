class EditHostingtable < ActiveRecord::Migration[5.2]
  def change
    add_column :hostings, :wifi, :boolean, default: true
    add_column :hostings, :shower, :boolean, default: true
    add_column :hostings, :TV, :boolean, default: true
    add_column :hostings, :bathroom, :boolean, default: true
    add_column :hostings, :blanket, :boolean, default: true
    add_column :hostings, :electricity, :boolean, default: true
    add_column :hostings, :pet_allowed, :boolean, default: true
    add_column :hostings, :laundry, :boolean, default: true
    add_column :hostings, :kitchen, :boolean, default: true
    add_column :hostings, :max_guest, :integer, default: 1
  end
end
