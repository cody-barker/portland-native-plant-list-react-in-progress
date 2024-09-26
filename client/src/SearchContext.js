import { useState, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [biSearch, setBiSearch] = useState("");
  const [comSearch, setComSearch] = useState("");

  function handleSearchState(setSearch) {
    return (e) => {
      setSearch(e.target.value);
    };
  }

  const handleBiNameSearchState = handleSearchState(setBiSearch);
  const handleComNameSearchState = handleSearchState(setComSearch);

  return (
    <SearchContext.Provider
      value={{
        biSearch,
        comSearch,
        setBiSearch,
        setComSearch,
        handleBiNameSearchState,
        handleComNameSearchState,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
