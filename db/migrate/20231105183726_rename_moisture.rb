class RenameMoisture < ActiveRecord::Migration[6.1]
  def change
    rename_column :species, :moisture, :moistureRequirement
  end
end
