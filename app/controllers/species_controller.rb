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
        :binomialName,
        :commonName,
        :speciesType,
        :min_height,
        :max_height,
        :height,
        :lightRequirement,
        :moistureRequirement,
        :photo,
        :acknowledgement,
        :photographer
      )
    end

end
