class AdminsController < ApplicationController

  def index
      render json: Admin.all
  end

  def show
      admin = Admin.find_by(id: session[:admin_id])
      render json: admin, status: :created
  end

  def create
      admin = Admin.create!(admin_params)
      session[:admin_id] = admin.id
      render json: admin, status: :created
  end

  private

  def user_params
      params.permit(
          :username, 
          :password,
          :password_confirmation
      )
  end

end
