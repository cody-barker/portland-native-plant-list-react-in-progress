class RemoveProjects < ActiveRecord::Migration[6.1]
  def change
    drop_table :projects
  end
end
