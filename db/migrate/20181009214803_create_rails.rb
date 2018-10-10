class CreateRails < ActiveRecord::Migration[5.1]
  def change
    create_table :rails do |t|
      t.string :g
      t.string :model
      t.string :necessity

      t.timestamps
    end
  end
end
