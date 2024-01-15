class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_resp
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp

  def authorize
    admin = Admin.find_by(id: session[:admin_id])
    render json: {errors: ["Not authorized."]}, status: :unauthorized unless admin
  end

  def render_unprocessable_entity_resp(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_record_not_found_resp(e)
    render json: {errors: [e.message]}, status: :not_found
  end

end
