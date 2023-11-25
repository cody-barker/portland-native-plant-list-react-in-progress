class SessionsController < ApplicationController

  def create
    admin = Admin.find_by(username: params[:username])
    if admin&.authenticate(params[:password])
        session[:admin_id] = admin.id
        render json: admin, status: :created
    else
        render json: {errors: ["Incorrect username or password"]}, status: :unauthorized
    end
  end

  def destroy
    session.delete(:admin_id)
    render json: {}, status: :ok
  end
end
