class RenameLight < ActiveRecord::Migration[6.1]
  def change
    rename_column :species, :light, :lightRequirement
  end
end
