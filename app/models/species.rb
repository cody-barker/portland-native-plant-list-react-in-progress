class Species < ApplicationRecord

  validates :common_name, :binomial_name, :species_type, :height, :light, :moisture, presence: true
  validates :species_type, inclusion: { in: %w(Tree Shrub Grass Herb Sedge Rush Fern),
    message: "must be Tree, Shrub, Grass, Herb, Sedge, Rush, or Fern"}
end
