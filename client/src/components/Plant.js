import { NavLink } from "react-router-dom";

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

  return (
    <tr className="table-row">
      <td id="latin">
        <NavLink to={`/plants/${id}`}>{binomial_name}</NavLink>
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
