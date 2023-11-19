import {useContext, useState} from 'react'
import Plant from '../components/Plant'
import Search from '../components/Search'
import { SearchContext } from '../SearchContext'
import { SpeciesContext } from '../SpeciesContext'
import caretDown from '../assets/caret-down.svg'

function AllPlants() {

    const {biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare} = useContext(SearchContext)
    const {allPlants} = useContext(SpeciesContext)
    const plantsSorted = [...allPlants].sort(compare)
    const allPlantsComps = plantsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const plantSearch = plantsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = plantSearch.map(plant => <Plant plant={plant} key={plant.id}/>)
    
    const [type, setType] = useState("type")

    return(
        <div>
            <div className="filters-container">
                <Search handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState} biSearch={biSearch} comSearch={comSearch}/>
                <div className='select-container'>
                    <select onChange={(e) => setType(e.target.value)} value={type}><img src={caretDown}/>
                        <option value="">All Types</option>
                        <option value="tree">Tree</option>
                        <option value="shrub">Shrub</option>
                        <option value="grass">Grass</option>
                        <option value="herb">Herb</option>
                    </select>
                    
                    
                    {/* <select>Height <img src={caretDown}/></select>
                    <select>Moisture <img src={caretDown}/></select>
                    <select>Light <img src={caretDown}/></select> */}
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