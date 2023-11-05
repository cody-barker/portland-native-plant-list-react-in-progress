import { useState, useEffect, createContext } from 'react'

const SpeciesContext = createContext()

function SpeciesProvider({children}) {
  const [allPlants, setAllPlants] = useState([])
  useEffect(() => {
    fetch("/species")
    .then((r) => r.json())
    .then((species) => {
      setAllPlants(species)
    })
  }, [])

  return(
    <SpeciesContext.Provider value={{allPlants, setAllPlants}}>
      {children}
    </SpeciesContext.Provider>
  )
}

export {SpeciesContext, SpeciesProvider}
