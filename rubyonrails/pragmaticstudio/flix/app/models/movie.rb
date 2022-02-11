class Movie < ApplicationRecord

  def self.released
    where("released_on < ?", Time.now).order(released_on: :desc)
  end

  def flop?
    if total_gross.nil?
      return true
    end

    total_gross < 225000000
  end
end
