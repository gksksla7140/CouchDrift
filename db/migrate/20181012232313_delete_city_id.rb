class DeleteCityId < ActiveRecord::Migration[5.1]
  def change
    remove_column :hostings, :city_id
  end
end
