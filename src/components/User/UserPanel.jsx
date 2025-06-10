import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trash2, 
  Edit3, 
  X, 
  Check, 
  User, 
  Phone, 
  Mail, 
  CreditCard, 
  Bed, 
  Wifi, 
  Car, 
  Coffee, 
  Star,
  Send,
  ChevronDown,
  Bell,
  LogOut,
  Eye,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserBookingPanel = () => {
  const [currentView, setCurrentView] = useState("bookings");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [changeRequest, setChangeRequest] = useState({
    bookingId: null,
    requestType: "",
    message: "",
    newCheckIn: "",
    newCheckOut: "",
    newGuests: ""
  });

  // Sample user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    memberSince: "2023"
  };

  // Sample booking data
  const [bookings, setBookings] = useState([
    {
      id: "BK001",
      roomType: "Deluxe Ocean View Suite",
      roomNumber: "301",
      checkIn: "2025-06-15",
      checkOut: "2025-06-20",
      guests: 2,
      status: "Confirmed",
      totalAmount: 1250,
      bookingDate: "2025-05-20",
    //   amenities: ["Ocean View", "King Bed", "Free WiFi", "Balcony", "Room Service"],
      roomImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
    //   specialRequests: "Late check-in requested"
    },
    {
      id: "BK002",
      roomType: "Standard Double Room",
      roomNumber: "205",
      checkIn: "2025-07-10",
      checkOut: "2025-07-14",
      guests: 2,
      status: "Pending",
      totalAmount: 800,
      bookingDate: "2025-05-25",
    //   amenities: ["Double Bed", "Free WiFi", "Air Conditioning", "TV"],
      roomImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop",
    //   specialRequests: "Ground floor room preferred"
    },
    {
      id: "BK003",
      roomType: "Presidential Suite",
      roomNumber: "501",
      checkIn: "2025-08-05",
      checkOut: "2025-08-10",
      guests: 4,
      status: "Confirmed",
      totalAmount: 2500,
      bookingDate: "2025-05-28",
      // amenities: ["Ocean View", "King Bed", "Free WiFi", "Jacuzzi", "Butler Service", "Private Balcony"],
      roomImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=250&fit=crop",
      // specialRequests: "Champagne and flowers for anniversary"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleDeleteBooking = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
    setShowDeleteModal(false);
    setSelectedBooking(null);
  };

  const handleSendChangeRequest = () => {
    // In a real app, this would send the request to the admin
    console.log("Change request sent:", changeRequest);
    setShowChangeModal(false);
    setChangeRequest({
      bookingId: null,
      requestType: "",
      message: "",
      newCheckIn: "",
      newCheckOut: "",
      newGuests: ""
    });
    // Show success message
    alert("Change request sent to admin successfully!");
  };

  const openChangeModal = (booking) => {
    setChangeRequest({
      ...changeRequest,
      bookingId: booking.id,
      newCheckIn: booking.checkIn,
      newCheckOut: booking.checkOut,
      newGuests: booking.guests.toString()
    });
    setShowChangeModal(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateNights = (checkIn, checkOut) => {
    const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    return nights;
  };
  const navigate = useNavigate();

const handleLogout = () => {
  // Clear any auth data if needed
  console.log("User logged out");
  localStorage.removeItem("userToken"); // optional
  navigate("/login"); // navigate to login page
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                BILTON
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  My Bookings
                </h1>
                <p className="text-sm text-gray-500">
                  Manage your hotel reservations
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">Guest</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 text-gray-500 hover:text-red-600 transition"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1300px] mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}!
              </h2>
              <p className="text-gray-600">
                You have {bookings.length} active bookings
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl">
              <Calendar className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex">
                {/* Room Image */}
                <div className="w-1/3 relative">
                  <img
                    src={booking.roomImage}
                    alt={booking.roomType}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {booking.roomType}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        Room {booking.roomNumber} • Booking #{booking.id}
                      </p>
                      <p className="text-sm text-gray-500">
                        Booked on {formatDate(booking.bookingDate)}
                      </p>
                    </div>
                    {/* <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">
                        ${booking.totalAmount}
                      </p>
                      <p className="text-sm text-gray-500">
                        {calculateNights(booking.checkIn, booking.checkOut)}{" "}
                        nights
                      </p>
                    </div> */}
                  </div>

                  {/* Check-in/Check-out Info */}
                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Check-in
                        </p>
                        <p className="text-sm text-gray-600">
                          {formatDate(booking.checkIn)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Check-out
                        </p>
                        <p className="text-sm text-gray-600">
                          {formatDate(booking.checkOut)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Guests and Amenities */}
                  {/* <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {booking.guests} Guests
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {booking.amenities.length} Amenities
                      </span>
                    </div>
                  </div> */}

                  {/* Amenities Tags */}
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {booking.amenities.slice(0, 4).map((amenity, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {booking.amenities.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{booking.amenities.length - 4} more
                      </span>
                    )}
                  </div> */}

                  {/* Special Requests */}
                  {booking.specialRequests && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <p className="text-sm font-medium text-yellow-800">
                          Special Request
                        </p>
                      </div>
                      <p className="text-sm text-yellow-700 mt-1">
                        {booking.specialRequests}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => openChangeModal(booking)}
                      className="flex items-center space-x-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Request Changes</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowDeleteModal(true);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No bookings found
            </h3>
            <p className="text-gray-500">You don't have any bookings yet.</p>
          </div>
        )}
      </main>

      {/* Booking Details Modal */}
      {selectedBooking && !showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedBooking.roomType}
                  </h2>
                  <p className="text-gray-600">Booking #{selectedBooking.id}</p>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <img
                src={selectedBooking.roomImage}
                alt={selectedBooking.roomType}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Booking Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Room:</span>
                      <span className="font-medium">
                        {selectedBooking.roomNumber}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">
                        {selectedBooking.guests}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          selectedBooking.status
                        )}`}
                      >
                        {selectedBooking.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-bold text-lg">
                        {selectedBooking.totalAmount}/-
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Stay Duration
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in:</span>
                      <span className="font-medium">
                        {formatDate(selectedBooking.checkIn)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out:</span>
                      <span className="font-medium">
                        {formatDate(selectedBooking.checkOut)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nights:</span>
                      <span className="font-medium">
                        {calculateNights(
                          selectedBooking.checkIn,
                          selectedBooking.checkOut
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Room Amenities
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedBooking.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedBooking.specialRequests && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Special Requests
                  </h3>
                  <p className="text-yellow-700">
                    {selectedBooking.specialRequests}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Cancel Booking
              </h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel your booking for{" "}
                {selectedBooking.roomType}? This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setSelectedBooking(null);
                  }}
                  className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Keep Booking
                </button>
                <button
                  onClick={() => handleDeleteBooking(selectedBooking.id)}
                  className="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Change Request Modal */}
      {showChangeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Request Changes
              </h2>
              <button
                onClick={() => setShowChangeModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Change
                </label>
                <select
                  value={changeRequest.requestType}
                  onChange={(e) =>
                    setChangeRequest({
                      ...changeRequest,
                      requestType: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select change type</option>
                  <option value="dates">Change Dates</option>
                  <option value="guests">Change Guest Count</option>
                  <option value="room">Change Room Type</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {changeRequest.requestType === "dates" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Check-in
                    </label>
                    <input
                      type="date"
                      value={changeRequest.newCheckIn}
                      onChange={(e) =>
                        setChangeRequest({
                          ...changeRequest,
                          newCheckIn: e.target.value,
                        })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Check-out
                    </label>
                    <input
                      type="date"
                      value={changeRequest.newCheckOut}
                      onChange={(e) =>
                        setChangeRequest({
                          ...changeRequest,
                          newCheckOut: e.target.value,
                        })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {changeRequest.requestType === "guests" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Guest Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={changeRequest.newGuests}
                    onChange={(e) =>
                      setChangeRequest({
                        ...changeRequest,
                        newGuests: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  value={changeRequest.message}
                  onChange={(e) =>
                    setChangeRequest({
                      ...changeRequest,
                      message: e.target.value,
                    })
                  }
                  placeholder="Please explain your request..."
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowChangeModal(false)}
                  className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendChangeRequest}
                  disabled={
                    !changeRequest.requestType || !changeRequest.message
                  }
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBookingPanel;