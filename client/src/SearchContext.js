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
   return a.binomialName.toLowerCase() < b.binomialName.toLowerCase() ? -1 : 1
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