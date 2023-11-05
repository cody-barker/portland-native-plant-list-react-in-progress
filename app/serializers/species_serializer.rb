class SpeciesSerializer < ActiveModel::Serializer
  attributes :id, :binomial_name, :common_name, :type, :min_height, :max_height, :light, :moisture, :photo
end
