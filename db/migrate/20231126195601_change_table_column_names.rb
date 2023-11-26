class ChangeTableColumnNames < ActiveRecord::Migration[6.1]
  def change
      rename_column :species, :speciesType, :species_type
    end
end
