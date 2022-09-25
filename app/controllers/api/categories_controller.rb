class Api::CategoriesController < ApplicationController
  def index
    render json: Category.order_name
  end
end
