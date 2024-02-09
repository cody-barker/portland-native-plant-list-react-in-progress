import { useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { SpeciesContext } from "../SpeciesContext";
import { AdminContext } from "../AdminContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";

function PlantDetail() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  let { id } = useParams();
  id = parseInt(id);
  const navigate = useNavigate();
  const { admin } = useContext(AdminContext);
  const { allPlants, setAllPlants } = useContext(SpeciesContext);
  const species = allPlants.find((species) => species.id === id);
  if (!species) {
    return <p>"Loading"</p>;
  }
  const { binomial_name, common_name, height, moisture, light } = species;

  const showToastMessage = () => {
    toast.success(`${binomial_name} deleted.`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  function handleDelete() {
    fetch(`/species/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedPlant) => {
        const updatedPlants = allPlants.filter(
          (plant) => plant.id !== deletedPlant.id
        );
        setAllPlants(updatedPlants);
        showToastMessage();
        navigate("/plants");
      });
  }

  return (
    <div className="plant-detail-container">
      <div className="plant-details">
        <p>{binomial_name}</p>
        <p>{common_name}</p>
        <p>{height}'</p>
        <p>{moisture}</p>
        <p>{light}</p>
        {admin ? (
          <NavLink className="edit-button" to={`/plants/${id}/edit`}>
            Edit
          </NavLink>
        ) : null}
        {admin ? (
          <NavLink className="delete-button" onClick={handleDelete}>
            Delete
          </NavLink>
        ) : null}
      </div>
    </div>
  );
}

export default PlantDetail;
