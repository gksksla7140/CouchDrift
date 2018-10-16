class Editbookingtable < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:bookings, :status, 'APPROVED')
  end
end
