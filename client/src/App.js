import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles/App.css"; // Styles
import NavBar from "./components/NavBar"; // Navigation Bar
import Footer from "./components/Footer"; // Footer Component
import Home from "./pages/Home"; // Home Page
import AllPlants from "./pages/AllPlants"; // All Plants Page
import PlantDetail from "./pages/PlantDetail"; // Plant Detail Page
import PlantForm from "./components/PlantForm"; // Plant Form Component
import UpdatePlantForm from "./components/UpdatePlantForm"; // Update Plant Form Component
import Login from "./pages/Login"; // Login Page
import NotFound from "./pages/NotFound"
import { SearchProvider } from "./SearchContext"; // Search Context
import { AdminProvider } from "./AdminContext"; // Admin Context

import ReactGA from "react-ga"; // Google Analytics

const TRACKING_ID = "G-2DW60JMQR5";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/plants" element={<AllPlants />} />
    <Route path="/plants/:id" element={<PlantDetail />} />
    <Route path="/plants/:id/edit" element={<UpdatePlantForm />} />
    <Route path="/login" element={<Login />} />
    <Route path="/plants/new" element={<PlantForm />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

function App() {
  ReactGA.initialize(TRACKING_ID);
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <SearchProvider>
      <AdminProvider>
        <NavBar />
        <AppRoutes />
        <Footer />
        <ToastContainer />
      </AdminProvider>
    </SearchProvider>
  );
}

export default App;
