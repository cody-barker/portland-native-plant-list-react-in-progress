class RenameType < ActiveRecord::Migration[6.1]
  def change
    rename_column :species, :type, :speciesType
  end
end
