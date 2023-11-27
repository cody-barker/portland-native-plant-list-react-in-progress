class AdminsController < ApplicationController
  before_action :authorize

  def show
      admin = Admin.find_by(id: session[:admin_id])
      render json: admin, status: :created
  end

  def create
      admin = Admin.create!(admin_params)
      session[:admin_id] = admin.id
      render json: admin, status: :created
  end

  def destroy
    admin = Admin.find(params[:id])
    admin.destroy
    render json: admin, status: :ok
  end

  private

  def admin_params
      params.permit(
          :username, 
          :password,
          :password_confirmation
      )
  end

end
