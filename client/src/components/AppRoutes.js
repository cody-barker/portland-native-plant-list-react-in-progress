import Home from "../pages/Home"; // Home Page
import AllPlants from "../pages/AllPlants"; // All Plants Page
import PlantDetail from "../pages/PlantDetail"; // Plant Detail Page
import PlantForm from "../components/PlantForm"; // Plant Form Component
import UpdatePlantForm from "../components/UpdatePlantForm"; // Update Plant Form Component
import Login from "../pages/Login"; // Login Page
import NotFound from "../pages/NotFound";

import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
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
}

export default AppRoutes;
