import React, { useEffect } from "react";
import ReactGA from "react-ga";

function Home() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  
  return (
    <header>
      <h1>PORTLAND NATIVE PLANTS</h1>
      <h2>Helping you find the right plant, for the right place.</h2>
      <h3 className="white">
        An expansive collection of plants native to Portland, Oregon.
      </h3>
    </header>
  );
}

export default Home;
