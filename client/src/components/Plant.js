import { NavLink, useNavigate } from "react-router-dom";

function Plant({ plant }) {
  const {
    id,
    binomial_name,
    common_name,
    species_type,
    height,
    moisture,
    light,
  } = plant;

  const navigate = useNavigate();

  return (
    <tr className="table-row">
      <td id="latin" onClick={() => navigate(`/plants/${id}`)}>
        {binomial_name}
      </td>
      <td>{common_name}</td>
      <td>{species_type}</td>
      <td>{height}</td>
      <td>{moisture}</td>
      <td>{light}</td>
    </tr>
  );
}

export default Plant;
