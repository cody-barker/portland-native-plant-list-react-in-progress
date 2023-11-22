class Admin < ApplicationRecord
  has_secure_password

  def index
    render json: Admin.all
  end

  def show
    admin = Admin.find(params[:id])
    render json: admin, status: :ok
  end

  def create
    admin = Admin.create!(admin_params)
    session[:admin_id] = admin.id
    render json: admin, status: :created
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
