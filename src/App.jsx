import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"
import About from "./components/About/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Gallery from "./components/Gallery/Gallery"
import Room from "./components/Room/Room"

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/room" element={<Room/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
