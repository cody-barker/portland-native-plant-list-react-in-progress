import './styles/App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AllPlants from './pages/AllPlants'
import Trees from './pages/Trees'
import Shrubs from './pages/Shrubs'
import Grasses from './pages/Grasses'
import Herbs from './pages/Herbs'
import { SearchProvider } from './SearchContext'

function App() {

  return (
    <SearchProvider>
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
    </SearchProvider>
  )
}

export default App;