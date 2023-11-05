class AddAcknowledgementColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :species, :acknowledgement, :string
  end
end
