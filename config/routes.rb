# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  resources :video_thumbnails, only: %w[show]

  namespace 'api' do
    resources :videos, only: %w[index create]

    defaults format: :json do
      resources :categories, only: %w[index]
    end
  end

  get 'videos/add', to: 'home#index'
end
