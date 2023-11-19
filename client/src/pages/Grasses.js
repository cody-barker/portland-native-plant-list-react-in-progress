import {useContext} from 'react'
import Plant from '../components/Plant'
import Search from '../components/Search'
import { SearchContext } from '../SearchContext'
import { SpeciesContext } from '../SpeciesContext'

function Grasses() {
    const {biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare} = useContext(SearchContext)
    const {allPlants} = useContext(SpeciesContext)
    const grasses = allPlants.filter(plant => plant.speciesType.toLowerCase().includes("grass"))
    const grassesSorted = [...grasses].sort(compare)
    const grassComps = grassesSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const grassSearch = grassesSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = grassSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? grassComps : searchComps}
        </div>
    )
}

export default Grasses