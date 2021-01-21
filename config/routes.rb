Rails.application.routes.draw do
  root to: "home#index"
  resources :home, only: :index
  resources :messages, only: :create
  devise_for :users
end
