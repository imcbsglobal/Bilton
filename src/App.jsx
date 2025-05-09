import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"
import About from "./components/About/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Gallery from "./components/Gallery/Gallery"
import Room from "./components/Room/Room"
import Contact from "./components/Contact/Contact"
import LoginPage from "./components/Login/LoginPage"
import Register from "./components/Login/Register"
import RoomDetails from "./components/Room/RoomDetails"
import Checkout from "./components/Room/Checkout"
import CheckBookingConfirmation from "./components/Room/CheckBookingConfirmation"

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/room" element={<Room/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/roomDetail" element={<RoomDetails/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/CheckBookingConfirmation" element={<CheckBookingConfirmation/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
