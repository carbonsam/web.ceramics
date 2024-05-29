# frozen_string_literal: true

class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user

  validates :comment, length: { minimum: 4 }
  validates :stars, numericality: {
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }

  def average
    Review.average(:stars)
  end
end
