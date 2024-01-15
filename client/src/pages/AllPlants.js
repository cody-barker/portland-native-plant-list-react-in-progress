import { useContext, useState } from "react";
import Plant from "../components/Plant";
import Search from "../components/Search";
import { SearchContext } from "../SearchContext";
import { SpeciesContext } from "../SpeciesContext";
import Caret from "../icons/Caret.jsx";

function AllPlants() {
  const {
    biSearch,
    comSearch,
    handleBiNameSearchState,
    handleComNameSearchState,
  } = useContext(SearchContext);

  const { allPlants } = useContext(SpeciesContext);
  const [sort, setSort] = useState({
    keyToSort: "binomial_name",
    direction: "asc",
  });
  const [type, setType] = useState("");

  let filteredPlants = getSortedArray(
    allPlants.filter(
      (plant) =>
        (biSearch === "" ||
          plant.binomial_name.toLowerCase().includes(biSearch.toLowerCase())) &&
        (comSearch === "" ||
          plant.common_name.toLowerCase().includes(comSearch.toLowerCase())) &&
        (type === "" || plant.species_type.toLowerCase() === type.toLowerCase())
    )
  );

  let plantComps = filteredPlants.map((plant) => (
    <Plant plant={plant} key={plant.id} />
  ));

  const headers = [
    {
      id: 1,
      KEY: "binomial_name",
      LABEL: "Binomial Name",
    },
    {
      id: 2,
      KEY: "common_name",
      LABEL: "Common Name",
    },
    {
      id: 3,
      KEY: "species_type",
      LABEL: "Type",
    },
    {
      id: 4,
      KEY: "height",
      LABEL: "Height (ft)",
    },
    {
      id: 5,
      KEY: "moisture",
      LABEL: "Moisture",
    },
    {
      id: 6,
      KEY: "light",
      LABEL: "Light",
    },
  ];

  function changeType(e) {
    setType(e.target.value);
  }

  const types = ["Tree", "Shrub", "Grass", "Herb", "Fern", "Sedge", "Rush"];

  function handleHeaderClick(header) {
    setSort({
      keyToSort: header.KEY,
      direction:
        header.KEY === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  }

  function getSortedArray(arrayToSort) {
    return arrayToSort.sort((a, b) => {
      const valueA = a[sort.keyToSort];
      const valueB = b[sort.keyToSort];

      if (typeof valueA === "string") {
        return sort.direction === "asc"
          ? valueA.localeCompare(valueB, undefined, { sensitivity: "base" })
          : valueB.localeCompare(valueA, undefined, { sensitivity: "base" });
      } else if (typeof valueA === "number") {
        return sort.direction === "asc" ? valueA - valueB : valueB - valueA;
      } else {
        // Handle other types as needed
        return 0;
      }
    });
  }

  return (
    <div className="main-container">
      <div className="filters-container">
        <Search
          handleBiNameSearchState={handleBiNameSearchState}
          handleComNameSearchState={handleComNameSearchState}
          biSearch={biSearch}
          comSearch={comSearch}
        />
        <div className="select-container">
          <select onChange={changeType} value={type}>
            <option value="">All Types</option>
            {types.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <table>
        <thead className="table-header-row">
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header)}>
                <div className="header-container">
                  <span>{header.LABEL}</span>
                  {header.KEY === sort.keyToSort && (
                    <Caret
                      direction={
                        sort.keyToSort === header.KEY ? sort.direction : "asc"
                      }
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{plantComps}</tbody>
      </table>
    </div>
  );
}

export default AllPlants;
