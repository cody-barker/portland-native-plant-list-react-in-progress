import { useState, useEffect, createContext } from 'react'

const SpeciesContext = createContext()

function SpeciesProvider({children}) {
  const [species, setSpecies] = useState([])
  useEffect(() => {
    fetch("/species")
    .then((r) => r.json())
    .then((species) => {
      setSpecies(species)
    })
  }, [])

  return(
    <SpeciesContext.Provider value={{species, setSpecies}}>
      {children}
    </SpeciesContext.Provider>
  )
}

export {SpeciesContext, SpeciesProvider}
