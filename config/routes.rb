Rails.application.routes.draw do
  resources :home, only: :index
  resources :messages, only: :create
  devise_for :users
  root to: "home#index"
end
