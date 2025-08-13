// index.jsx (update)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './component/Home.jsx';
import Deployment from './component/Deployment.jsx'; // <- new

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployment" element={<Deployment />} />    {/* new route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>,
)
