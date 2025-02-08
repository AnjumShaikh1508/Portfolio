import { Routes,  Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Github from './Components/Github'
import Contact from './Components/Contact'
import Resume from './Components/Resume'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Github/>
      <Contact/>
      <Resume />
    </>
  )
}

export default App
