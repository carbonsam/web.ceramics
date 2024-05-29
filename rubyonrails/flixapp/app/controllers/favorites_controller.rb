# frozen_string_literal: true

class FavoritesController < ApplicationController

  before_action :require_signin

  def create
    movie = Movie.find(params[:movie_id])
    Favorite.create!(movie_id: movie.id, user_id: current_user.id)
    redirect_to movie
  end

  def destroy
    favorite = current_user.favorites.find(params[:id])
    favorite.destroy

    movie = Movie.find(params[:movie_id])
    redirect_to movie
  end

end
