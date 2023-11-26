class Species < ApplicationRecord

  validates :commonName, :binomialName, :speciesType, :height, :lightRequirement, :moistureRequirement, presence: true
  validates :speciesType, inclusion: { in: %w(Tree Shrub Grass Herb),
    message: "For Type, Please Use: Tree, Shrub, Grass or Herb"}
end
