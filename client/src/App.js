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
import { ToastContainer} from 'react-toastify';
import PlantDetail from './pages/PlantDetail'
import UpdatePlantForm from './components/UpdatePlantForm'

function App() {

  return (
    <SearchProvider>
      <AdminProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<AllPlants />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/plants/:id/edit" element={<UpdatePlantForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plants/new" element={<PlantForm />} />
          <Route
            path="*"
            element={
              <div className="vh85">
                <h2 className="dark-green">404 Error - Page Not Found</h2>
                <h3 className="dark-green"> Please Return to the Home Page</h3>
              </div>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />
      </AdminProvider>
    </SearchProvider>
  );
}

export default App;