class AddPhotographerColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :species, :photographer, :string
  end
end
