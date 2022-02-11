module MoviesHelper

  def total_gross(movie)
    if movie.flop?
      "Flop!"
    else
      number_to_currency(movie.total_gross, precision: 0)
    end
  end

  def release_year(movie)
    if movie.released_on.nil?
      return ""
    end
    movie.released_on.year
  end

end
