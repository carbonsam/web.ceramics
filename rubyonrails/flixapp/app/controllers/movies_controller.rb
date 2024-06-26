# frozen_string_literal: true

class MoviesController < ApplicationController

  before_action :set_movie, only: [:show, :edit, :update, :destroy]
  before_action :require_admin, except: %i[index show]

  def index
    @movies = case params[:filter]
              when 'upcoming'
                Movie.upcoming
              when 'recent'
                Movie.recent
              else
                Movie.released
              end
  end

  def show
    @fans = @movie.fans
    @favorite = current_user.favorites.find_by(movie_id: @movie.id) if current_user
    @genres = @movie.genres
  end

  def edit; end

  def update
    if @movie.update(movie_attributes)
      redirect_to @movie, notice: 'Movie was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.new(movie_attributes)

    if @movie.save
      redirect_to @movie, notice: 'Movie was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @movie.destroy
    redirect_to movies_path, notice: 'Movie was successfully deleted.'
  end

  private

  def set_movie
    @movie = Movie.find_by!(slug: params[:id])
  end

  def movie_attributes
    params.require(:movie).permit(:title, :description, :rating, :released_on, :total_gross, :director, :duration,
                                  :image_file_name, genre_ids: [])
  end
end
