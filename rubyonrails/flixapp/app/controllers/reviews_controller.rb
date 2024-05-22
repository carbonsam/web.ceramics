# frozen_string_literal: true

class ReviewsController < ApplicationController
  before_action :set_movie

  def index
    @reviews = @movie.reviews
  end

  def create
    @review = @movie.reviews.new(review_attributes)

    if @review.save
      redirect_to movie_reviews_path(@movie), notice: 'Review was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def new
    @review = @movie.reviews.new
  end

  private

  def set_movie
    @movie = Movie.find(params[:movie_id])
  end

  def review_attributes
    params.require(:review).permit(:name, :comment, :stars)
  end
end
