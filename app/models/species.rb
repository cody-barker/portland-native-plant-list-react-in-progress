class Species < ApplicationRecord

  validates :commonName, :binomialName, :speciesType, :height, :lightRequirement, :moistureRequirement, presence: true
  validates :speciesType, inclusion: { in: %w(Tree Shrub Grass Herb),
    message: "must be Tree, Shrub, Grass or Herb"}
end
