import { useContext, useState } from 'react';
import Plant from '../components/Plant';
import Search from '../components/Search';
import { SearchContext } from '../SearchContext';
import { SpeciesContext } from '../SpeciesContext';

function AllPlants() {
  const {
    biSearch,
    comSearch,
    handleBiNameSearchState,
    handleComNameSearchState,
    compare,
  } = useContext(SearchContext);
  const { allPlants } = useContext(SpeciesContext);

  const [type, setType] = useState('');

  const plantsSorted = [...allPlants].sort(compare);

  const filteredPlants = plantsSorted.filter(
    (plant) =>
      (biSearch === '' || plant.binomialName.toLowerCase().includes(biSearch.toLowerCase())) &&
      (comSearch === '' || plant.commonName.toLowerCase().includes(comSearch.toLowerCase())) &&
      (type === '' || plant.speciesType.toLowerCase() === type.toLowerCase())
  );

  const plantComps = filteredPlants.map((plant) => <Plant plant={plant} key={plant.id} />);

  function changeType(e) {
    setType(e.target.value);
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
            <option value="tree">Tree</option>
            <option value="shrub">Shrub</option>
            <option value="grass">Grass</option>
            <option value="herb">Herb</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Binomial Name</th>
            <th>Common Name</th>
            <th>Type</th>
            <th>Max Height (ft)</th>
            <th>Moisture</th>
            <th>Light</th>
          </tr>
        </thead>
        <tbody>{plantComps}</tbody>
      </table>
    </div>
  );
}

export default AllPlants;
