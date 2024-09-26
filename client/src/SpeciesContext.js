import { useState, useEffect, createContext } from "react";

const SpeciesContext = createContext();

function SpeciesProvider({ children }) {
  useEffect(() => {
    fetchPlants();
  }, []);

  const [allPlants, setAllPlants] = useState([]);
  const fetchPlants = async () => {
    const response = await fetch("/species");
    const plants = await response.json();
    console.log(plants);
    setAllPlants(plants);
  };

  return (
    <SpeciesContext.Provider value={{ allPlants, setAllPlants }}>
      {children}
    </SpeciesContext.Provider>
  );
}

export { SpeciesContext, SpeciesProvider };
