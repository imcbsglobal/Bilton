import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Gallery from "./components/Gallery"

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
