import { useContext, useState } from 'react';
import Plant from '../components/Plant';
import Search from '../components/Search';
import { SearchContext } from '../SearchContext';
import { SpeciesContext } from '../SpeciesContext';
import Caret from '../icons/Caret.jsx'

function AllPlants() {
  const {
    biSearch,
    comSearch,
    handleBiNameSearchState,
    handleComNameSearchState,
    compare,
  } = useContext(SearchContext);

  const { allPlants } = useContext(SpeciesContext);
  const [sort, setSort] = useState({keyToSort: "binomialName", direction: "asc"})
  const [type, setType] = useState('');
  // let plantsSorted = [...allPlants].sort(compare);
  // let plantsSorted = getSortedArray(allPlants)
  // let filteredPlants = plantsSorted.filter(
  //   (plant) =>
  //     (biSearch === '' || plant.binomialName.toLowerCase().includes(biSearch.toLowerCase())) &&
  //     (comSearch === '' || plant.commonName.toLowerCase().includes(comSearch.toLowerCase())) &&
  //     (type === '' || plant.speciesType.toLowerCase() === type.toLowerCase())
  // );
  let filteredPlants = getSortedArray(allPlants.filter(
    (plant) =>
      (biSearch === '' || plant.binomialName.toLowerCase().includes(biSearch.toLowerCase())) &&
      (comSearch === '' || plant.commonName.toLowerCase().includes(comSearch.toLowerCase())) &&
      (type === '' || plant.speciesType.toLowerCase() === type.toLowerCase())
  ));

  console.log(filteredPlants)
  let plantComps = filteredPlants.map((plant) => <Plant plant={plant} key={plant.id} />);
 
  function changeType(e) {
    setType(e.target.value);
  }

  const headers = [
    {
      id: 1,
      KEY: "binomialName",
      LABEL: "Binomial Name"
    },
    {
      id: 2,
      KEY: "commonName",
      LABEL: "Common Name"
    },
    {
      id: 3,
      KEY: "speciesType",
      LABEL: "Type"
    },
    {
      id: 4,
      KEY: "height",
      LABEL: "Max Height (ft)"
    },
    {
      id: 5,
      KEY: "moistureRequirement",
      LABEL: "Moisture"
    },
    {
      id: 6,
      KEY: "lightRequirement",
      LABEL: "Light"
    }
  ]
  
  const types = ["Tree", "Shrub", "Grass", "Herb"]

  function handleHeaderClick(header) {
    setSort({
      keyToSort: header.KEY,
      direction:
        header.KEY === sort.keyToSort ? sort.direction === 'asc' ? 'desc' : 'asc' : 'desc'
    })
  }

  function getSortedArray(arrayToSort) {
    if (sort.direction === 'asc') {
      return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1))
    }
    return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1))
  }

  return (
    <div className="table-container">
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
              return <option key={index} value={type}>{type}</option>
            })}
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
           {headers.map((header, index) => (
            <th key={index} onClick={() => handleHeaderClick(header)}>
              <div className="header-container">
                <span>{header.LABEL}</span>
                  {header.KEY === sort.keyToSort && (
                    <Caret direction={sort.keyToSort === header.KEY ? sort.direction : 'asc'}
                    />
                  )}
              </div>
            </th>
           ))}
          </tr>
        </thead>
        <tbody>{plantComps}</tbody>
        {/* <tbody>
          {getSortedArray(allPlants).map((row, index) => {
            <tr key={index}>
              {headers.map((header, index) => (
                <td title={row[header.KEY]} key={index}>
                  {row[header.KEY]}
                </td>
              ))}
            </tr>
          })}
        </tbody> */}
      </table>
    </div>
  );
}

export default AllPlants;
