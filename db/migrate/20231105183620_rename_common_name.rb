class RenameCommonName < ActiveRecord::Migration[6.1]
  def change
    rename_column :species, :common_name, :commonName
  end
end
