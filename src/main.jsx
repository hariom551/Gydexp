import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import './index.css';
import ExploreLores from './Components/ExploreLores.jsx';
import ExploreGydes from './Components/ExploreGydes.jsx';
import SecondPage from './Components/SecondPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ExploreGydes />} />
          <Route path="/exploreLores" element={<ExploreLores />} />
          <Route path="/exploreUs" element={<SecondPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
