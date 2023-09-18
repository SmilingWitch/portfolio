
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import {AnimatePresence} from 'framer-motion'


function App() {
  return (
   < AnimatePresence>
    <Router>
        <Routes>
              <Route path = "portfolio/" element = { <Home/> } />
              <Route path = "portfolio/about" element = {<Projects/>}/>
        </Routes>
  </Router>
    </AnimatePresence>

    
  )
}

export default App
