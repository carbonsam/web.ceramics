Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'goals/index'
      post 'goals/create'
      delete 'goals/:id', to: 'goals#destroy'
    end
  end

  root 'goals#index'
end
