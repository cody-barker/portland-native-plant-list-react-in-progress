import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { SpeciesProvider } from './SpeciesContext'
import { SearchProvider } from './SearchContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SpeciesProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </SpeciesProvider>
  </BrowserRouter>
)