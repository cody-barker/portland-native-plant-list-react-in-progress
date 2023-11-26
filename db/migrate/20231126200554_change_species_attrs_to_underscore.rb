class ChangeSpeciesAttrsToUnderscore < ActiveRecord::Migration[6.1]
  def change
    change_table(:species) do |t|
      t.rename(:commonName, :common_name)
      t.rename(:lightRequirement, :light)
      t.rename(:moistureRequirement, :moisture)
    end
  end
end
