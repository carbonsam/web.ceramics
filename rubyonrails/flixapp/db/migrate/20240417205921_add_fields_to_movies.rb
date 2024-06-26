# frozen_string_literal: true

class AddFieldsToMovies < ActiveRecord::Migration[7.1]
  def change
    add_column :movies, :description, :text
    add_column :movies, :released_on, :date
  end
end
