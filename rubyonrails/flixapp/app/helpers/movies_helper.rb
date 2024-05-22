# frozen_string_literal: true

module MoviesHelper
  def total_gross(movie)
    if movie.flop?
      'Flop!'
    else
      number_to_currency(movie.total_gross, precision: 0)
    end
  end

  def year_released(movie)
    movie.released_on.year
  end

  def average_stars(movie)
    avg = movie.average_stars

    if avg.zero?
      content_tag(:strong, 'No reviews yet')
    else
      "#{avg.round} stars"
    end
  end
end
