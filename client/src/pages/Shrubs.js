import {useContext} from 'react'
import Plant from './Plant'
import Search from '../components/Search'
import { SearchContext } from '../SearchContext'
import { SpeciesContext } from '../SpeciesContext'

function Shrubs() {
    const {biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare} = useContext(SearchContext)
    const {allPlants} = useContext(SpeciesContext)
    const shrubs = allPlants.filter(plant => plant.speciesType.toLowerCase().includes("shrub"))
    const shrubsSorted = [...shrubs].sort(compare)
    const shrubComps = shrubsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const shrubSearch = shrubsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = shrubSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? shrubComps : searchComps}
        </div>
    )    
}

export default Shrubs