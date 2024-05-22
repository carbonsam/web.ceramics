# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users
  get 'up' => 'rails/health#show', as: :rails_health_check

  root 'movies#index'

  resources :movies do
    resources :reviews
  end
end
