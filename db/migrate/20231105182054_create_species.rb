class CreateSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :species do |t|
      t.string :binomial_name
      t.string :common_name
      t.string :type
      t.string :min_height
      t.string :max_height
      t.string :light
      t.string :moisture
      t.string :photo

      t.timestamps
    end
  end
end
