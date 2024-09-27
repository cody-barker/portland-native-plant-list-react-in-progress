import { useContext, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { SpeciesContext } from "../SpeciesContext";
import { AdminContext } from "../AdminContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";

function PlantDetail() {
  const id = parseInt(useParams().id);
  const navigate = useNavigate();
  const { admin } = useContext(AdminContext);
  const { allPlants, setAllPlants } = useContext(SpeciesContext);

  // Track page view using Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const species = allPlants.find((species) => species.id === id);

  if (!species) {
    return <p>Loading...</p>;
  }

  const { binomial_name, common_name, height, moisture, light } = species;

  const showToastMessage = (binomial_name) => {
    toast.success(`${binomial_name} deleted.`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSuccessfulDelete = () => {
    const updatedPlantsArr = allPlants.filter((plant) => plant.id !== id);
    setAllPlants(updatedPlantsArr);
    showToastMessage(binomial_name);
    navigate("/plants");
  };

  const handleDeleteError = (error) => {
    console.error("Error deleting species:", error);
    toast.error("Failed to delete species. Please try again.");
  };

  const deleteSpecies = () => {
    return fetch(`/species/${id}`, { method: "DELETE" });
  };

  const handleDelete = () => {
    deleteSpecies(id).then(handleSuccessfulDelete).catch(handleDeleteError);
  };

  return (
    <div className="plant-detail-container">
      <div className="plant-details">
        <p>{binomial_name}</p>
        <p>{common_name}</p>
        <p>{height}'</p>
        <p>{moisture}</p>
        <p>{light}</p>
        {admin && (
          <>
            <NavLink className="edit-button" to={`/plants/${id}/edit`}>
              Edit
            </NavLink>
            <NavLink className="delete-button" onClick={handleDelete}>
              Delete
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default PlantDetail;
