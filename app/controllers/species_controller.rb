class SpeciesController < ApplicationController

  def index
    species = Species.all
    render json: species, status: ok
  end

  def show
    species = Species.all.find(params[:id])
    render json: plant, status: ok
  end

  def create
    species = Species.create!(species_params)
    render json: species, status: created
  end

  private
    def species_params
      params.permit(
        :binomial_name,
        :common_name,
        :type,
        :mig_height,
        :max_height,
        :light,
        :moisture,
        :photo
      )
    end

end
