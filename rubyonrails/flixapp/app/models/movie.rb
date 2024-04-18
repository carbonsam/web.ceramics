class Movie < ApplicationRecord

  def flop?
    total_gross < 600000000
  end

end
