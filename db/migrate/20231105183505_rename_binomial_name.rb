class RenameBinomialName < ActiveRecord::Migration[6.1]
  def change
    rename_column :species, :binomial_name, :binomialName
  end
end
