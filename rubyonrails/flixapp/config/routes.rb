# frozen_string_literal: true

Rails.application.routes.draw do
  resources :genres
  get 'up' => 'rails/health#show', as: :rails_health_check

  root 'movies#index'

  resources :movies do
    resources :reviews
    resources :favorites
  end

  resources :users
  get "signup" => "users#new"

  resource :session, only: [:new, :create, :destroy]
  get "signin" => "sessions#new"
end
