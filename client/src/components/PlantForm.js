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
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          name="common_name"
          placeholder="A Common Name"
          value={common_name}
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          name="species_type"
          placeholder="Type"
          value={species_type}
        ></input>
        <input
          onChange={onInputChange}
          type="number"
          name="height"
          placeholder="Height (ft)"
          value={height}
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          name="light"
          placeholder="Light Requirement"
          value={light}
        ></input>
        <input
          onChange={onInputChange}
          type="text"
          name="moisture"
          placeholder="Moisture Requirement"
          value={moisture}
        ></input>
        <button type="submit">{isLoading ? "Loading" : "Submit"}</button>
      </form>
      {errors.map((error, index) => (
        <p key={index} className="error-message">
          {error}
        </p>
      ))}
    </div>
  );
}

export default PlantForm;
