class Species < ApplicationRecord
  validates :commonName, :binomialName, :speciesType, :height, :lightRequirement, :moistureRequirement, presence: true
end
