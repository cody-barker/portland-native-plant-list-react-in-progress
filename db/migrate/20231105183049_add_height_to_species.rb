class AddHeightToSpecies < ActiveRecord::Migration[6.1]
  def change
    add_column :species, :height, :string
  end
end
