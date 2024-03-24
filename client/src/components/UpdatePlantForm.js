// import { useEffect, useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { SpeciesContext } from "../SpeciesContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function UpdatePlantForm() {
//   const navigate = useNavigate();
//   let { id } = useParams();
//   id = parseInt(id);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState([]);
//   const { allPlants, setAllPlants } = useContext(SpeciesContext);

//   useEffect(() => {
//     if (allPlants.length > 0) {
//       const species = allPlants.find((plant) => plant.id === id);

//       if (species) {
//         setInputState({
//           binomial_name: species.binomial_name,
//           common_name: species.common_name,
//           species_type: species.species_type,
//           height: species.height,
//           light: species.light,
//           moisture: species.moisture,
//         });
//       }
//     }
//   }, [allPlants, id]);

//   const [inputState, setInputState] = useState({
//     binomial_name: "",
//     common_name: "",
//     species_type: "",
//     height: "",
//     light: "",
//     moisture: "",
//   });

//   const {
//     binomial_name,
//     common_name,
//     species_type,
//     height, light,
//     moisture
//   } = inputState;

//   const showToastMessage = () => {
//     toast.success(`${binomial_name} updated`, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };

//   function onInputChange(e) {
//     setInputState({
//       ...inputState,
//       [e.target.name]: e.target.value,
//     });
//   }

//   const formData = {
//     binomial_name,
//     common_name,
//     species_type,
//     height,
//     light,
//     moisture,
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`/species/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         setIsLoading(false);
//         showToastMessage();
//         r.json().then((updatedPlant) => {
//           const updatedPlants = allPlants.map((plant) =>
//             plant.id === updatedPlant.id ? updatedPlant : plant
//           );
//           setAllPlants(updatedPlants);
//         });
//         navigate("/plants");
//       } else {
//         r.json().then((error) => setErrors(error.errors));
//       }
//     });
//   }

//   if (allPlants.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="form-container">
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <h3>Edit Species Details</h3>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="binomial_name"
//           placeholder="Binomial Name"
//           value={binomial_name}
//         ></input>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="common_name"
//           placeholder="A Common Name"
//           value={common_name}
//         ></input>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="species_type"
//           placeholder="Type"
//           value={species_type}
//         ></input>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="height"
//           placeholder="Height (ft)"
//           value={height}
//         ></input>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="light"
//           placeholder="Light Requirement"
//           value={light}
//         ></input>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="moisture"
//           placeholder="Moisture Requirement"
//           value={moisture}
//         ></input>
//         <button type="submit">{isLoading ? "Loading" : "Submit"}</button>
//       </form>
//       {errors.map((error, index) => (
//         <p key={index} className="error-message">
//           {error}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default UpdatePlantForm;


//-------------------------------------------



// import { useEffect, useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { SpeciesContext } from "../SpeciesContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function UpdatePlantForm() {
//   const navigate = useNavigate();
//   let { id } = useParams();
//   id = parseInt(id);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState([]);
//   const { allPlants, setAllPlants } = useContext(SpeciesContext);

//   useEffect(() => {
//     if (allPlants.length > 0) {
//       const species = allPlants.find((plant) => plant.id === id);

//       if (species) {
//         setInputState({
//           binomial_name: species.binomial_name,
//           common_name: species.common_name,
//           species_type: species.species_type,
//           height: species.height,
//           light: species.light,
//           moisture: species.moisture,
//         });
//       }
//     }
//   }, [allPlants, id]);

//   const [inputState, setInputState] = useState({
//     binomial_name: "",
//     common_name: "",
//     species_type: "",
//     height: "",
//     light: "",
//     moisture: "",
//   });

//   const {
//     binomial_name,
//     common_name,
//     species_type,
//     height,
//     light,
//     moisture,
//   } = inputState;

//   const showToastMessage = () => {
//     toast.success(`${binomial_name} updated`, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };

//   function onInputChange(e) {
//     setInputState({
//       ...inputState,
//       [e.target.name]: e.target.value,
//     });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch(`/species/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputState),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         showToastMessage();
//         const updatedPlants = allPlants.map((plant) =>
//           plant.id === data.id ? data : plant
//         );
//         setAllPlants(updatedPlants);
//         navigate("/plants");
//       } else {
//         setErrors(data.errors);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     setIsLoading(false);
//   };

//   if (allPlants.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="form-container">
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <h3>Edit Species Details</h3>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="binomial_name"
//           placeholder="Binomial Name"
//           value={binomial_name}
//         />
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="common_name"
//           placeholder="A Common Name"
//           value={common_name}
//         />
//         <select
//           onChange={onInputChange}
//           name="species_type"
//           value={species_type}
//         >
//           <option value="">Select Type</option>
//           <option value="Tree">Tree</option>
//           <option value="Shrub">Shrub</option>
//           <option value="Herb">Herb</option>
//           <option value="Grass">Grass</option>
//           <option value="Sedge">Sedge</option>
//           <option value="Rush">Rush</option>
//           <option value="Vine">Vine</option>
//           <option value="Aquatic">Aquatic</option>
//         </select>
//         <input
//           onChange={onInputChange}
//           type="text"
//           name="height"
//           placeholder="Height (ft)"
//           value={height}
//         />
//         <select
//           onChange={onInputChange}
//           name="light"
//           value={light}
//           >
//             <option value="">Select Type</option>
//             <option></option>
//             <option></option>
//             <option></option>
//             <option></option>
//         </select>

//         <input
//           onChange={onInputChange}
//           type="text"
//           name="moisture"
//           placeholder="Moisture Requirement"
//           value={moisture}
//         />
//         <button type="submit">{isLoading ? "Loading" : "Submit"}</button>
//       </form>
//       {errors.map((error, index) => (
//         <p key={index} className="error-message">
//           {error}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default UpdatePlantForm;


import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpeciesContext } from "../SpeciesContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatePlantForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  id = parseInt(id);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const { allPlants, setAllPlants } = useContext(SpeciesContext);

  useEffect(() => {
    if (allPlants.length > 0) {
      const species = allPlants.find((plant) => plant.id === id);

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

  const [inputState, setInputState] = useState({
    binomial_name: "",
    common_name: "",
    species_type: "",
    height: "",
    light: [],
    moisture: "",
  });

  const {
    binomial_name,
    common_name,
    species_type,
    height,
    light,
    moisture,
  } = inputState;

  const showToastMessage = () => {
    toast.success(`${binomial_name} updated`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

const handleLightChange = (e) => {
  const { value, checked } = e.target;

  setInputState((prevState) => {
    let updatedLight = [...prevState.light];

    if (checked) {
      if (updatedLight.length < 3) {
        updatedLight.push(value);
      }
    } else {
      updatedLight = updatedLight.filter((item) => item !== value);
    }

    return {
      ...prevState,
      light: updatedLight,
    };
  });
};






  function onInputChange(e) {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  }

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
        showToastMessage();
        const updatedPlants = allPlants.map((plant) =>
          plant.id === data.id ? data : plant
        );
        setAllPlants(updatedPlants);
        navigate("/plants");
      } else {
        setErrors(data.errors);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsLoading(false);
  };

  if (allPlants.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3>Edit Species Details</h3>
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
          onChange={onInputChange}
          name="species_type"
          value={species_type}
        >
          <option value="">Select Type</option>
          <option value="Tree">Tree</option>
          <option value="Shrub">Shrub</option>
          <option value="Herb">Herb</option>
          <option value="Grass">Grass</option>
          <option value="Sedge">Sedge</option>
          <option value="Rush">Rush</option>
          <option value="Vine">Vine</option>
          <option value="Aquatic">Aquatic</option>
        </select>
        <input
          onChange={onInputChange}
          type="text"
          name="height"
          placeholder="Height (ft)"
          value={height}
        />
        <div className="checkbox">
          <h3>Light Requirement</h3>
          <label>
            Full Sun
            <input
              className="checkbox--input"
              type="checkbox"
              name="light"
              value="Full Sun"
              checked={light.includes("Full Sun")}
              onChange={handleLightChange}
              onClick={handleLightChange} // Add onClick event handler
            />
          </label>
          <label>
            Partial Shade
            <input
              className="checkbox--input"
              type="checkbox"
              name="light"
              value="Partial Shade"
              checked={light.includes("Partial Shade")}
              onChange={handleLightChange}
              onClick={handleLightChange} // Add onClick event handler
            />
          </label>
          <label>
            Full Shade
            <input
              className="checkbox--input"
              type="checkbox"
              name="light"
              value="Full Shade"
              checked={light.includes("Full Shade")}
              onChange={handleLightChange}
              onClick={handleLightChange} // Add onClick event handler
            />
          </label>
        </div>
        <input
          onChange={onInputChange}
          type="text"
          name="moisture"
          placeholder="Moisture Requirement"
          value={moisture}
        />
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

export default UpdatePlantForm;
