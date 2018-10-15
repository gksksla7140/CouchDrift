class EditHOst < ActiveRecord::Migration[5.2]
  def change
    add_column :hostings, :img_url, :text, default: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
  end
end
