import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpeciesContext } from "../SpeciesContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatePlantForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { allPlants, setAllPlants } = useContext(SpeciesContext);

  // Initial input state for the form
  const [inputState, setInputState] = useState({
    binomial_name: "",
    common_name: "",
    species_type: "",
    height: "",
    light: "",
    moisture: "",
  });

  // Extracting values from inputState
  const { binomial_name, common_name, species_type, height, light, moisture } =
    inputState;

  useEffect(() => {
    if (allPlants.length > 0) {
      const species = allPlants.find((plant) => plant.id === parseInt(id));

      if (species) {
        setInputState({
          binomial_name: species.binomial_name,
          common_name: species.common_name,
          species_type: species.species_type,
          height: species.height,
          light: species.light,
          moisture: species.moisture,
        });
      }
    }
  }, [allPlants, id]);

  // Handle input change for all form fields
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/species/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputState),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(`${binomial_name} updated successfully!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        // Update the plant in the state
        const updatedPlants = allPlants.map((plant) =>
          plant.id === data.id ? data : plant
        );
        setAllPlants(updatedPlants);
        navigate("/plants");
      } else {
        setErrors(data.errors);
      }
    } catch (error) {
      console.error("Error updating plant:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (allPlants.length === 0) {
    return <div>Loading...</div>;
  }

  // Dropdown options
  const speciesOptions = [
    "Tree",
    "Shrub",
    "Herb",
    "Grass",
    "Sedge",
    "Rush",
    "Vine",
    "Aquatic",
  ];

  const lightOptions = [
    "Full Sun",
    "Full Sun to Partial Shade",
    "Full Shade to Partial Shade",
    "Shade",
  ];

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3>Edit Species Details</h3>
        <input
          type="text"
          name="binomial_name"
          placeholder="Binomial Name"
          value={binomial_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="common_name"
          placeholder="Common Name"
          value={common_name}
          onChange={handleInputChange}
        />
        <select
          name="species_type"
          className="edit-form__select"
          value={species_type}
          onChange={handleInputChange}
        >
          <option value="">Select Species Type</option>
          {speciesOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="height"
          placeholder="Height (ft)"
          value={height}
          onChange={handleInputChange}
        />
        <select
          name="light"
          className="edit-form__select"
          value={light}
          onChange={handleInputChange}
        >
          <option value="">Select Light Requirement</option>
          {lightOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="moisture"
          placeholder="Moisture Requirement"
          value={moisture}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} className="error-message">
            {error}
          </p>
        ))}
    </div>
  );
}

export default UpdatePlantForm;
