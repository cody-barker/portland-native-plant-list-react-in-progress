import {useContext} from 'react'
import Plant from './Plant'
import Search from '../components/Search'
import { SearchContext } from '../SearchContext'
import { SpeciesContext } from '../SpeciesContext'

function Herbs(){
    const {biSearch, comSearch, handleBiNameSearchState, handleComNameSearchState, compare} = useContext(SearchContext)
    const {allPlants} = useContext(SpeciesContext)
    const herbs = allPlants.filter(plant => plant.speciesType.toLowerCase().includes("herb"))
    const herbsSorted = [...herbs].sort(compare)
    const herbComps = herbsSorted.map(plant => <Plant plant={plant} key={plant.id}/>)
    const herbSearch = herbsSorted.filter(plant => plant.binomialName.split(" ").join("").toLowerCase().includes(biSearch.split(" ").join("").toLowerCase()) && plant.commonName.split(" ").join("").toLowerCase().includes(comSearch.split(" ").join("").toLowerCase()))
    const searchComps = herbSearch.map(plant => <Plant plant={plant} key={plant.id}/>)

    return(
        <div>
            <Search biSearch={biSearch} comSearch={comSearch} handleBiNameSearchState={handleBiNameSearchState} handleComNameSearchState={handleComNameSearchState}/>
            {biSearch === "" && comSearch === ""? herbComps : searchComps}
        </div>
    );
};

export default Herbs;