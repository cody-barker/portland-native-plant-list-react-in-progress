import {useContext} from 'react'
import Plant from '../components/Plant'
import Search from '../components/Search'
import { SearchContext } from '../SearchContext'
import { SpeciesContext } from '../SpeciesContext'

function AllPlants() {

    const {biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare} = useContext(SearchContext)
    const {allPlants} = useContext(SpeciesContext)
    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const plantSearch = plantsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = plantSearch.map(plant => <Plant plant={plant} key={plant.id}/>)
    
    return(
        <div>
            <div className="filters-container">
                <Search handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
                <div className='filter-btns-container'>
                    <button className="filter-btn">Type</button>
                    <button className="filter-btn">Height</button>
                    <button className="filter-btn">Moisture</button>
                    <button className="filter-btn">Light</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Binomial Name</th>
                        <th>Common Name</th>
                        <th>Type</th>
                        <th>Height</th>
                        <th>Moisture</th>
                        <th>Light</th>
                    </tr>
                </thead>
                <tbody>
                    {biSearch === "" && comSearch === "" ? allPlantsComps : searchComps}
                </tbody>
            </table>
        </div>
    )
}

export default AllPlants