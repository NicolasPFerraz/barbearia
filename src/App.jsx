import { BrowserRouter as Router, Route, useParams, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

function HomeWrapper() {
  const { section } = useParams() // 'hero', 'about', 'services' etc
  return <Home section={section} />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home activeSection={undefined} />} />
        <Route path="/:section" element={<HomeWrapper />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  )
}

export default App
