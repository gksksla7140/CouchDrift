class Edittables < ActiveRecord::Migration[5.1]
  def change
    drop_table :reviews
    drop_table :rails

  end
end
