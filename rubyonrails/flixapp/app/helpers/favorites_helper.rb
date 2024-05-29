# frozen_string_literal: true

module FavoritesHelper

  def favorite_toggle_button(movie, favorite)
    if favorite
      button_to('Un-Favorite', movie_favorite_path(movie, favorite), method: :delete)
    else
      button_to('Favorite', movie_favorites_path(movie))
    end
  end

end
