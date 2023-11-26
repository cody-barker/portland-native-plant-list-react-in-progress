class SpeciesSerializer < ActiveModel::Serializer
  attributes :id, :binomial_name, :common_name, :species_type, :light, :moisture, :photo, :height, :acknowledgement, :photographer

end
