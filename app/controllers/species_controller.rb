class SpeciesController < ApplicationController

  def index
    species = Species.all
    render json: species, status: :ok
  end

  def show
    species = Species.find(params[:id])
    render json: species, status: :ok
  end

  def update
    species = Species.find(params[:id])
    species.update!(species_params)
    render json: species, status: :ok
  end

  def create
    species = Species.create!(species_params)
    render json: species, status: :created
  end


  private
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
