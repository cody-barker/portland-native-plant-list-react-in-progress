import { useState, useEffect, createContext } from "react";

const SpeciesContext = createContext();

function SpeciesProvider({ children }) {
  const [allPlants, setAllPlants] = useState([]);

  const fetchPlants = async () => {
    const response = await fetch("/species");
    const plants = await response.json();
    setAllPlants(plants);
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <SpeciesContext.Provider value={{ allPlants, setAllPlants }}>
      {children}
    </SpeciesContext.Provider>
  );
}

export { SpeciesContext, SpeciesProvider };
