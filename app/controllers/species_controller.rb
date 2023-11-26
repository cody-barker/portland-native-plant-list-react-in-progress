class SpeciesController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index, :show]

  def index
    species = Species.all
    render json: species, status: :ok
  end

  def show
    species = find_species
    render json: species, status: :ok
  end

  def create
      species = Species.create!(species_params)
      render json: species, status: :created
  end

  def update
      species = find_species
      species.update!(species_params)
      render json: species, status: :ok
  end

  def destroy
      species = find_species
      species.destroy
      render json: species, status: :ok
  end

  private

  def find_species
    Species.find(params[:id])
  end

  def authorize
    admin = Admin.find_by(id: session[:admin_id])
    render json: {errors: ["Not authorized."]}, status: :unauthorized unless admin
  end

  def species_params
    params.permit(
      :binomial_name,
      :common_name,
      :species_type,
      :min_height,
      :max_height,
      :height,
      :light,
      :moisture,
      :photo,
      :acknowledgement,
      :photographer
    )
  end

end
