import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"
import Room from "./components/Room/Room"
import Contact from "./components/Contact/Contact"
import LoginPage from "./components/Login/LoginPage"
import Register from "./components/Login/Register"
import RoomDetails from "./components/Room/RoomDetails"
import Checkout from "./components/Room/Checkout"
import CheckBookingConfirmation from "./components/Room/CheckBookingConfirmation"
import Payment from "./Payment"
import Admin from './components/Admin/Dashboard'
import ImageGallery from "./components/Admin/ImageGallery"
import VideoGallery from "./components/Admin/VideoGallery"
import UserPanel from './components/User/UserPanel'
function AppContent() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/login') || location.pathname.startsWith('/imagegallery') || location.pathname.startsWith('/videogallery') || location.pathname.startsWith('/imagegallery') || location.pathname.startsWith('/userpanel')

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/roomDetail" element={<RoomDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/CheckBookingConfirmation" element={<CheckBookingConfirmation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/imagegallery" element={<ImageGallery />} />
        <Route path="/videogallery" element={<ImageGallery />} />
        <Route path="/userpanel" element={<UserPanel />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
