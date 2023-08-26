
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import StarsSkay from './components/starsSky/StarsSkay'
import About from './components/about/About'





function App() {
  return (
    <>
    <Router>
        <Routes>
              <Route path = "/" element = { <Home/> } />
              <Route path = "/about" element = {<Projects/>}/>
        </Routes>
  </Router>

  

     
     
    </>
  )
}

export default App
