import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DrawingPage from './pages/DrawingPage.jsx'
import Garden from './pages/Garden.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/canvas" element={<DrawingPage />} />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
