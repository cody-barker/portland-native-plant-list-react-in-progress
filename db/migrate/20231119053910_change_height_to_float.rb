class ChangeHeightToFloat < ActiveRecord::Migration[6.1]
    remove_column :species, :height
end