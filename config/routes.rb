# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  namespace 'api' do
    resources :videos, only: %w[index create]

    defaults format: :json do
      resources :categories, only: %w[index]
    end
  end

  get '*path', to: 'home#index'
end
