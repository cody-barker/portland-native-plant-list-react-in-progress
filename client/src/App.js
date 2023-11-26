import './styles/App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AllPlants from './pages/AllPlants'
import PlantForm from './components/PlantForm'
import { SearchProvider } from './SearchContext'
import Footer from './components/Footer'
import Login from './pages/Login'
import { AdminProvider } from './AdminContext'

function App() {

  return (
    <SearchProvider>
      <AdminProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/plants" element={<AllPlants />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/plants/new" element={<PlantForm />}/>
            <Route path="*" element={<h1>404 Not Found - Please Return to the Home Page</h1>}/>
          </Routes>
          <Footer />
        </AdminProvider>
    </SearchProvider>
  )
}

export default App;