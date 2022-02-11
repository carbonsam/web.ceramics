class AddFieldsToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :description, :string
    add_column :movies, :released_on, :datetime
  end
end
