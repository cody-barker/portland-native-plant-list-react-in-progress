import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles/App.css";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SearchProvider } from "./SearchContext";
import { AdminProvider } from "./AdminContext";
import ReactGA from "react-ga";

const TRACKING_ID = "G-2DW60JMQR5";

const initGoogleAnalytics = () => ReactGA.initialize(TRACKING_ID);

const trackPageView = (location) => {
  ReactGA.pageview(location.pathname + location.search);
};

function App() {
  const location = useLocation();
  initGoogleAnalytics();

  useEffect(() => {
    trackPageView(location);
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
