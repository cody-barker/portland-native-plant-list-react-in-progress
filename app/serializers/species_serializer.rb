class SpeciesSerializer < ActiveModel::Serializer
  attributes :id, :binomialName, :commonName, :speciesType, :min_height, :max_height, :lightRequirement, :moistureRequirement, :photo, :height, :acknowledgement, :photographer

end
