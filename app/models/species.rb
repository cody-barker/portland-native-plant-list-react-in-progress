class Species < ApplicationRecord

  validates :common_name, :binomial_name, :species_type, :height, :light, :moisture, presence: true
  validates :species_type, inclusion: { in: %w(Tree Shrub Grass Herb),
    message: "must be Tree, Shrub, Grass or Herb"}
  validates :height, numericality: {greater_than: 0, less_than: 381}
end
