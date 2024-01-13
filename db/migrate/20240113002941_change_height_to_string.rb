class ChangeHeightToString < ActiveRecord::Migration[6.1]
  def change
    change_column :species, :height, :string
  end
end
