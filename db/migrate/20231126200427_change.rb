class Change < ActiveRecord::Migration[6.1]
  def change
    rename_column :species, :binomialName, :binomial_name
  end
end
