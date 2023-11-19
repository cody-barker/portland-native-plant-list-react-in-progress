class AddHeightColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :species, :height, :float
  end
end
