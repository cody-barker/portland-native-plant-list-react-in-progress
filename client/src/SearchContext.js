import { useState, createContext } from 'react'

const SearchContext = createContext()

function SearchProvider({children}) {

  const [biSearch, setBiSearch] = useState("")
  const [comSearch, setComSearch] = useState("")

  function handleBiNameSearchState(e) {
    setBiSearch(e.target.value)
  }

  function handleComNameSearchState(e) {
    setComSearch(e.target.value)
  }
  
  return(
    <SearchContext.Provider value={
      { 
        biSearch,
        setBiSearch,
        comSearch,
        setComSearch,
        handleBiNameSearchState,
        handleComNameSearchState
        }
      }>
      {children}
    </SearchContext.Provider>
  )
}

export {SearchContext, SearchProvider}