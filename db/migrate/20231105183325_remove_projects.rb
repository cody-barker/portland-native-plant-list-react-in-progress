class RemoveProjects < ActiveRecord::Migration[6.1]
  def change
    reversible do |dir|
      dir.up do
        # Create the table if it doesn't exist
        create_table :projects do |t|
          # Define the table schema here
        end
      end

      dir.down do
        # Drop the table
        drop_table :projects, if_exists: true
      end
    end
  end
end
