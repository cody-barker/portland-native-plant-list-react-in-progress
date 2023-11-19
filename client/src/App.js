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
import Footer from './components/Footer'

function App() {

  return (
    <SearchProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/allplants" element={<AllPlants />}/>
          <Route path="/trees" element={<Trees />}/>
          <Route path="/shrubs" element={<Shrubs />}/>
          <Route path="/grasses" element={<Grasses />}/>
          <Route path="/herbs" element={<Herbs />}/>
          <Route path="*" element={<h1>404 Not Found - Please Return to the Home Page</h1>}/>
        </Routes>
        <Footer />
    </SearchProvider>
  )
}

export default App;