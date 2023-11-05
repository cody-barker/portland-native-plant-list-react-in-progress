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

  function compare(a, b) {
    if (a.binomialName.toLowerCase() < b.binomialName.toLowerCase()) {
        return -1
    }
    if (a.binomialName.toLowerCase() > b.binomialName.toLowerCase()) {
        return 1
    }
    return 0
  }
  

  return(
    <SearchContext.Provider value={
      { 
        biSearch,
        setBiSearch,
        comSearch,
        setComSearch,
        handleBiNameSearchState,
        handleComNameSearchState,
        compare}
      }>
      {children}
    </SearchContext.Provider>
  )
}

export {SearchContext, SearchProvider}