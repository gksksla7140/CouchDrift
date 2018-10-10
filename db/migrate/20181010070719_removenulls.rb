class Removenulls < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :fname, true
    change_column_null :users, :lname, true
    change_column_null :users, :about, true
    change_column_null :users, :age, true
    change_column_null :users, :sex, true
  end
end
