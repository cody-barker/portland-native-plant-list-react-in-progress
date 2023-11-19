import './styles/App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AllPlants from './pages/AllPlants'
import { SearchProvider } from './SearchContext'
import Footer from './components/Footer'

function App() {

  return (
    <SearchProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/plants" element={<AllPlants />}/>
          <Route path="*" element={<h1>404 Not Found - Please Return to the Home Page</h1>}/>
        </Routes>
        <Footer />
    </SearchProvider>
  )
}

export default App;