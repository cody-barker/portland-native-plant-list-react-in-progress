import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpeciesContext } from "../SpeciesContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PlantForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { allPlants, setAllPlants } = useContext(SpeciesContext);
  const navigate = useNavigate();
  const [inputState, setInputState] = useState({
    binomial_name: "",
    common_name: "",
    species_type: "",
    height: "",
    light: "",
    moisture: "",
  });

  const { binomial_name, common_name, species_type, height, light, moisture } =
    inputState;

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

  const moistureOptions = [
    "Dry",
    "Dry to Moist",
    "Moist to Wet",
    "Wet",
    "Aquatic",
  ];

  const showToastMessage = () => {
    toast.success(`${common_name} added!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  function onInputChange(e) {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  }

  const formData = {
    binomial_name,
    common_name,
    species_type,
    height,
    light,
    moisture,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/species", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        setIsLoading(false);
        showToastMessage();
        r.json().then((plant) => setAllPlants([...allPlants, plant]));
        navigate("/plants");
      } else {
        r.json().then((error) => setErrors(error.errors));
        setIsLoading(false);
      }
    });
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3>Submit a New Species to the List</h3>
        <input
          onChange={onInputChange}
          type="text"
          name="binomial_name"
          placeholder="Binomial Name"
          value={binomial_name}
        />
        <input
          onChange={onInputChange}
          type="text"
          name="common_name"
          placeholder="A Common Name"
          value={common_name}
        />
        <select
          name="species_type"
          className="edit-form__select"
          value={species_type}
          onChange={onInputChange}
        >
          <option value="">Select Species Type</option>
          {speciesOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          onChange={onInputChange}
          type="text"
          name="height"
          placeholder="Height (ft)"
          value={height}
        />
        <select
          name="light"
          className="edit-form__select"
          value={light}
          onChange={onInputChange}
        >
          <option value="">Select Light Requirement</option>
          {lightOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="moisture"
          className="edit-form__select"
          value={moisture}
          onChange={onInputChange}
        >
          <option value="">Select Moisture Requirement</option>
          {moistureOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>

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

export default PlantForm;
