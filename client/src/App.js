import './styles/App.css';
import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import PlantForm from './components/PlantForm'
import AllPlants from './pages/AllPlants'
import Trees from './pages/Trees'
import Shrubs from './pages/Shrubs'
import Grasses from './pages/Grasses'
import Herbs from './pages/Herbs'

function App() {

  const [allPlants, setAllPlants] = useState([])
  const [biSearch, setBiSearch] = useState("")
  const [comSearch, setComSearch] = useState("")

  function handleBiNameSearchState(e) {
    setBiSearch(e.target.value)
  }

  function handleComNameSearchState(e) {
    setComSearch(e.target.value)
  }

  useEffect(() => {
    fetch('https://plantlist-database.onrender.com/plants')
    .then(r => r.json())
    .then(list => setAllPlants(list))
  }, [])

  function compare(a, b) {
    if (a.binomialName.toLowerCase() < b.binomialName.toLowerCase()) {
        return -1
    }
    if (a.binomialName.toLowerCase() > b.binomialName.toLowerCase()) {
        return 1
    }
    return 0
}

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/allplants" element={<AllPlants />}/>
        <Route path="/trees" element={<Trees />}/>
        <Route path="/shrubs" element={<Shrubs />}/>
        <Route path="/grasses" element={<Grasses />}/>
        <Route path="/herbs" element={<Herbs />}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
      </Routes>
    </div>
  )
}

export default App;