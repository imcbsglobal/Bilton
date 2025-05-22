import React, { useState } from "react";
import { Search, Plus, Trash2, X, Calendar, Edit, Eye, User } from "lucide-react";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      guestName: "John Smith",
      email: "john.smith@email.com",
      phone: "+1-555-0123",
      roomType: "Deluxe Suite",
      checkIn: "2024-06-15",
      checkOut: "2024-06-18",
      guests: 2,
      totalAmount: 450.00,
      status: "Confirmed",
      bookingDate: "2024-05-20",
      specialRequests: "Late check-in requested"
    },
    {
      id: 2,
      guestName: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1-555-0124",
      roomType: "Standard Room",
      checkIn: "2024-06-20",
      checkOut: "2024-06-22",
      guests: 1,
      totalAmount: 200.00,
      status: "Pending",
      bookingDate: "2024-05-18",
      specialRequests: ""
    },
    {
      id: 3,
      guestName: "Michael Brown",
      email: "m.brown@email.com",
      phone: "+1-555-0125",
      roomType: "Family Room",
      checkIn: "2024-06-25",
      checkOut: "2024-06-28",
      guests: 4,
      totalAmount: 600.00,
      status: "Checked-in",
      bookingDate: "2024-05-15",
      specialRequests: "Ground floor room preferred"
    },
    {
      id: 4,
      guestName: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1-555-0126",
      roomType: "Presidential Suite",
      checkIn: "2024-07-01",
      checkOut: "2024-07-05",
      guests: 2,
      totalAmount: 1200.00,
      status: "Cancelled",
      bookingDate: "2024-05-10",
      specialRequests: "Anniversary celebration setup"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [viewingBooking, setViewingBooking] = useState(null);
  const [newBooking, setNewBooking] = useState({
    guestName: "",
    email: "",
    phone: "",
    roomType: "Standard Room",
    checkIn: "",
    checkOut: "",
    guests: 1,
    totalAmount: 0,
    status: "Pending",
    specialRequests: ""
  });
  const [editBooking, setEditBooking] = useState({
    guestName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    totalAmount: 0,
    status: "",
    specialRequests: ""
  });

  const roomTypes = ["Standard Room", "Deluxe Room", "Deluxe Suite", "Family Room", "Presidential Suite"];
  const statusOptions = ["Pending", "Confirmed", "Checked-in", "Checked-out", "Cancelled"];

  const filteredBookings = bookings.filter((booking) =>
    booking.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Delete this booking?")) {
      setBookings(bookings.filter((booking) => booking.id !== id));
    }
  };

  const handleEditClick = (booking) => {
    setEditingBookingId(booking.id);
    setEditBooking({
      guestName: booking.guestName,
      email: booking.email,
      phone: booking.phone,
      roomType: booking.roomType,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      guests: booking.guests,
      totalAmount: booking.totalAmount,
      status: booking.status,
      specialRequests: booking.specialRequests
    });
    setIsEditModalOpen(true);
  };

  const handleViewClick = (booking) => {
    setViewingBooking(booking);
    setIsViewModalOpen(true);
  };

  const handleSaveEdit = () => {
    setBookings(bookings.map(booking => 
      booking.id === editingBookingId 
        ? { 
            ...booking, 
            guestName: editBooking.guestName,
            email: editBooking.email,
            phone: editBooking.phone,
            roomType: editBooking.roomType,
            checkIn: editBooking.checkIn,
            checkOut: editBooking.checkOut,
            guests: editBooking.guests,
            totalAmount: editBooking.totalAmount,
            status: editBooking.status,
            specialRequests: editBooking.specialRequests
          }
        : booking
    ));
    setIsEditModalOpen(false);
    setEditingBookingId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...bookings.map((booking) => booking.id), 0) + 1;
    const today = new Date().toISOString().split("T")[0];
    setBookings([
      ...bookings,
      {
        ...newBooking,
        id: newId,
        bookingDate: today,
        totalAmount: parseFloat(newBooking.totalAmount)
      }
    ]);
    setNewBooking({
      guestName: "",
      email: "",
      phone: "",
      roomType: "Standard Room",
      checkIn: "",
      checkOut: "",
      guests: 1,
      totalAmount: 0,
      status: "Pending",
      specialRequests: ""
    });
    setIsModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Checked-in": return "bg-blue-100 text-blue-800";
      case "Checked-out": return "bg-gray-100 text-gray-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      {/* <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">View Bookings</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Booking
        </button>
      </div> */}

      {/* Search */}
      <div className="relative w-full md:w-1/3 mb-4">
        <input
          type="text"
          placeholder="Search by guest name or email..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{bookings.filter(b => b.status === 'Confirmed').length}</div>
          <div className="text-sm text-gray-600">Confirmed</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{bookings.filter(b => b.status === 'Pending').length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{bookings.filter(b => b.status === 'Checked-in').length}</div>
          <div className="text-sm text-gray-600">Checked-in</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-gray-600">{bookings.length}</div>
          <div className="text-sm text-gray-600">Total Bookings</div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-600">
            <tr>
              <th className="p-3">Guest</th>
              <th className="p-3">Room Type</th>
              <th className="p-3">Check-in</th>
              <th className="p-3">Check-out</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              {/* <th className="p-3 text-right">Actions</th> */}
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredBookings.length ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{booking.guestName}</div>
                        <div className="text-gray-500 text-xs">{booking.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{booking.roomType}</td>
                  <td className="p-3">{booking.checkIn}</td>
                  <td className="p-3">{booking.checkOut}</td>
                  <td className="p-3 font-semibold">${booking.totalAmount.toFixed(2)}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  {/* <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleViewClick(booking)}
                        className="text-gray-600 hover:text-gray-800 p-1 rounded-md hover:bg-gray-50"
                        title="View"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(booking)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  <Calendar className="mx-auto mb-2 w-6 h-6" />
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Booking Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add New Booking</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Guest Name"
                value={newBooking.guestName}
                onChange={(e) => setNewBooking({ ...newBooking, guestName: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Email"
                type="email"
                value={newBooking.email}
                onChange={(e) => setNewBooking({ ...newBooking, email: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Phone"
                value={newBooking.phone}
                onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={newBooking.roomType}
                onChange={(e) => setNewBooking({ ...newBooking, roomType: e.target.value })}
              >
                {roomTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-in Date"
                type="date"
                value={newBooking.checkIn}
                onChange={(e) => setNewBooking({ ...newBooking, checkIn: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-out Date"
                type="date"
                value={newBooking.checkOut}
                onChange={(e) => setNewBooking({ ...newBooking, checkOut: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Number of Guests"
                type="number"
                min="1"
                value={newBooking.guests}
                onChange={(e) => setNewBooking({ ...newBooking, guests: parseInt(e.target.value) })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Total Amount"
                type="number"
                step="0.01"
                value={newBooking.totalAmount}
                onChange={(e) => setNewBooking({ ...newBooking, totalAmount: e.target.value })}
              />
            </div>
            
            <textarea
              className="w-full mt-4 px-3 py-2 border rounded"
              placeholder="Special Requests"
              rows="3"
              value={newBooking.specialRequests}
              onChange={(e) => setNewBooking({ ...newBooking, specialRequests: e.target.value })}
            />
            
            <div className="flex justify-end mt-6">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Booking
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Edit Booking Modal */}
      {/* {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit Booking</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Guest Name"
                value={editBooking.guestName}
                onChange={(e) => setEditBooking({ ...editBooking, guestName: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Email"
                type="email"
                value={editBooking.email}
                onChange={(e) => setEditBooking({ ...editBooking, email: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Phone"
                value={editBooking.phone}
                onChange={(e) => setEditBooking({ ...editBooking, phone: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={editBooking.roomType}
                onChange={(e) => setEditBooking({ ...editBooking, roomType: e.target.value })}
              >
                {roomTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-in Date"
                type="date"
                value={editBooking.checkIn}
                onChange={(e) => setEditBooking({ ...editBooking, checkIn: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-out Date"
                type="date"
                value={editBooking.checkOut}
                onChange={(e) => setEditBooking({ ...editBooking, checkOut: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Number of Guests"
                type="number"
                min="1"
                value={editBooking.guests}
                onChange={(e) => setEditBooking({ ...editBooking, guests: parseInt(e.target.value) })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Total Amount"
                type="number"
                step="0.01"
                value={editBooking.totalAmount}
                onChange={(e) => setEditBooking({ ...editBooking, totalAmount: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={editBooking.status}
                onChange={(e) => setEditBooking({ ...editBooking, status: e.target.value })}
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <textarea
              className="w-full mt-4 px-3 py-2 border rounded"
              placeholder="Special Requests"
              rows="3"
              value={editBooking.specialRequests}
              onChange={(e) => setEditBooking({ ...editBooking, specialRequests: e.target.value })}
            />
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* View Booking Modal */}
      {isViewModalOpen && viewingBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Booking Details</h3>
              <button onClick={() => setIsViewModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Guest Name</label>
                  <p className="text-gray-900">{viewingBooking.guestName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{viewingBooking.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-gray-900">{viewingBooking.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Room Type</label>
                  <p className="text-gray-900">{viewingBooking.roomType}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Check-in</label>
                  <p className="text-gray-900">{viewingBooking.checkIn}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Check-out</label>
                  <p className="text-gray-900">{viewingBooking.checkOut}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Guests</label>
                  <p className="text-gray-900">{viewingBooking.guests}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Total Amount</label>
                  <p className="text-gray-900 font-semibold">${viewingBooking.totalAmount.toFixed(2)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(viewingBooking.status)}`}>
                    {viewingBooking.status}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Booking Date</label>
                  <p className="text-gray-900">{viewingBooking.bookingDate}</p>
                </div>
              </div>
              
              {viewingBooking.specialRequests && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Special Requests</label>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded mt-1">{viewingBooking.specialRequests}</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBookings;