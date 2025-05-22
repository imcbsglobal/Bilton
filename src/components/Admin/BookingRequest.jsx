import React, { useState } from "react";
import { Search, Plus, Trash2, X, Clock, Edit, Eye, CheckCircle, XCircle, AlertCircle, Mail, MessageSquare } from "lucide-react";

const BookingRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      guestName: "Jennifer Williams",
      email: "jennifer.w@email.com",
      phone: "+1-555-0140",
      roomType: "Deluxe Suite",
      checkIn: "2024-07-01",
      checkOut: "2024-07-04",
      guests: 2,
      estimatedAmount: 540.00,
      status: "Pending",
      priority: "Normal",
      source: "Website",
      requestDate: "2024-06-20",
      responseDeadline: "2024-06-22",
      specialRequests: "Honeymoon package requested",
      guestNotes: "Celebrating our anniversary",
      adminNotes: "",
      assignedTo: "Unassigned"
    },
    {
      id: 2,
      guestName: "Corporate Event Team",
      email: "events@techcorp.com",
      phone: "+1-555-0141",
      roomType: "Multiple Rooms",
      checkIn: "2024-07-15",
      checkOut: "2024-07-17",
      guests: 12,
      estimatedAmount: 2400.00,
      status: "Under Review",
      priority: "High",
      source: "Email",
      requestDate: "2024-06-18",
      responseDeadline: "2024-06-21",
      specialRequests: "Need 6 standard rooms, conference room access",
      guestNotes: "Corporate retreat for 12 employees",
      adminNotes: "Check conference room availability",
      assignedTo: "Sales Team"
    },
    {
      id: 3,
      guestName: "Mark Thompson",
      email: "mark.thompson@email.com",
      phone: "+1-555-0142",
      roomType: "Family Room",
      checkIn: "2024-07-08",
      checkOut: "2024-07-12",
      guests: 4,
      estimatedAmount: 800.00,
      status: "Approved",
      priority: "Normal",
      source: "Phone",
      requestDate: "2024-06-19",
      responseDeadline: "2024-06-21",
      specialRequests: "Ground floor room preferred, extra bed needed",
      guestNotes: "Traveling with elderly parents",
      adminNotes: "Room 105 reserved, extra bed confirmed",
      assignedTo: "Front Desk - Alice"
    },
    {
      id: 4,
      guestName: "Sarah Mitchell",
      email: "sarah.m@email.com",
      phone: "+1-555-0143",
      roomType: "Standard Room",
      checkIn: "2024-06-25",
      checkOut: "2024-06-27",
      guests: 1,
      estimatedAmount: 180.00,
      status: "Rejected",
      priority: "Low",
      source: "Website",
      requestDate: "2024-06-21",
      responseDeadline: "2024-06-22",
      specialRequests: "Late check-in after 11 PM",
      guestNotes: "Arriving on late flight",
      adminNotes: "Fully booked for requested dates",
      assignedTo: "Reception - Bob"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editingRequestId, setEditingRequestId] = useState(null);
  const [viewingRequest, setViewingRequest] = useState(null);
  const [newRequest, setNewRequest] = useState({
    guestName: "",
    email: "",
    phone: "",
    roomType: "Standard Room",
    checkIn: "",
    checkOut: "",
    guests: 1,
    estimatedAmount: 0,
    priority: "Normal",
    source: "Website",
    specialRequests: "",
    guestNotes: "",
    assignedTo: "Unassigned"
  });
  const [editRequest, setEditRequest] = useState({
    guestName: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    estimatedAmount: 0,
    status: "",
    priority: "",
    source: "",
    specialRequests: "",
    guestNotes: "",
    adminNotes: "",
    assignedTo: ""
  });

  const roomTypes = ["Standard Room", "Deluxe Room", "Deluxe Suite", "Family Room", "Presidential Suite", "Multiple Rooms"];
  const statusOptions = ["Pending", "Under Review", "Approved", "Rejected", "Cancelled"];
  const priorityOptions = ["Low", "Normal", "High", "Urgent"];
  const sourceOptions = ["Website", "Phone", "Email", "Walk-in", "Travel Agent", "Third Party"];
  const staffOptions = ["Unassigned", "Front Desk - Alice", "Reception - Bob", "Sales Team", "Manager - Charlie"];

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = request.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || request.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleDelete = (id) => {
    if (window.confirm("Delete this booking request?")) {
      setRequests(requests.filter((request) => request.id !== id));
    }
  };

  const handleEditClick = (request) => {
    setEditingRequestId(request.id);
    setEditRequest({
      guestName: request.guestName,
      email: request.email,
      phone: request.phone,
      roomType: request.roomType,
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      guests: request.guests,
      estimatedAmount: request.estimatedAmount,
      status: request.status,
      priority: request.priority,
      source: request.source,
      specialRequests: request.specialRequests,
      guestNotes: request.guestNotes,
      adminNotes: request.adminNotes,
      assignedTo: request.assignedTo
    });
    setIsEditModalOpen(true);
  };

  const handleViewClick = (request) => {
    setViewingRequest(request);
    setIsViewModalOpen(true);
  };

  const handleStatusChange = (id, newStatus) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  const handleSaveEdit = () => {
    setRequests(requests.map(request => 
      request.id === editingRequestId 
        ? { 
            ...request, 
            guestName: editRequest.guestName,
            email: editRequest.email,
            phone: editRequest.phone,
            roomType: editRequest.roomType,
            checkIn: editRequest.checkIn,
            checkOut: editRequest.checkOut,
            guests: editRequest.guests,
            estimatedAmount: editRequest.estimatedAmount,
            status: editRequest.status,
            priority: editRequest.priority,
            source: editRequest.source,
            specialRequests: editRequest.specialRequests,
            guestNotes: editRequest.guestNotes,
            adminNotes: editRequest.adminNotes,
            assignedTo: editRequest.assignedTo
          }
        : request
    ));
    setIsEditModalOpen(false);
    setEditingRequestId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...requests.map((request) => request.id), 0) + 1;
    const today = new Date().toISOString().split("T")[0];
    const responseDeadline = new Date();
    responseDeadline.setDate(responseDeadline.getDate() + 2);
    
    setRequests([
      ...requests,
      {
        ...newRequest,
        id: newId,
        requestDate: today,
        responseDeadline: responseDeadline.toISOString().split("T")[0],
        status: "Pending",
        adminNotes: "",
        estimatedAmount: parseFloat(newRequest.estimatedAmount)
      }
    ]);
    setNewRequest({
      guestName: "",
      email: "",
      phone: "",
      roomType: "Standard Room",
      checkIn: "",
      checkOut: "",
      guests: 1,
      estimatedAmount: 0,
      priority: "Normal",
      source: "Website",
      specialRequests: "",
      guestNotes: "",
      assignedTo: "Unassigned"
    });
    setIsModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Under Review": return "bg-blue-100 text-blue-800";
      case "Approved": return "bg-green-100 text-green-800";
      case "Rejected": return "bg-red-100 text-red-800";
      case "Cancelled": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low": return "bg-gray-100 text-gray-800";
      case "Normal": return "bg-blue-100 text-blue-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Urgent": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getSourceIcon = (source) => {
    switch (source) {
      case "Website": return "🌐";
      case "Phone": return "📞";
      case "Email": return "📧";
      case "Walk-in": return "🚶";
      case "Travel Agent": return "🧳";
      case "Third Party": return "🏢";
      default: return "📝";
    }
  };

  const isOverdue = (responseDeadline, status) => {
    const today = new Date().toISOString().split("T")[0];
    return responseDeadline < today && (status === "Pending" || status === "Under Review");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Booking Requests</h2>
          <p className="text-sm text-gray-600">Manage incoming booking requests and inquiries</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Request
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by guest name or email..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        
        <select
          className="px-3 py-2 border border-gray-300 rounded-lg"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          {statusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        
        <select
          className="px-3 py-2 border border-gray-300 rounded-lg"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="all">All Priority</option>
          {priorityOptions.map(priority => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{requests.filter(r => r.status === 'Pending').length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{requests.filter(r => r.status === 'Under Review').length}</div>
          <div className="text-sm text-gray-600">Under Review</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{requests.filter(r => r.status === 'Approved').length}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{requests.filter(r => isOverdue(r.responseDeadline, r.status)).length}</div>
          <div className="text-sm text-gray-600">Overdue</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-gray-600">{requests.length}</div>
          <div className="text-sm text-gray-600">Total Requests</div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-600">
            <tr>
              <th className="p-3">Guest & Contact</th>
              <th className="p-3">Request Details</th>
              <th className="p-3">Dates</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Response Due</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredRequests.length ? (
              filteredRequests.map((request) => (
                <tr key={request.id} className={`border-b hover:bg-gray-50 ${isOverdue(request.responseDeadline, request.status) ? 'bg-red-50' : ''}`}>
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">{getSourceIcon(request.source)}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{request.guestName}</div>
                        <div className="text-gray-500 text-xs">{request.email}</div>
                        <div className="text-gray-500 text-xs">{request.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div>
                      <div className="font-medium">{request.roomType}</div>
                      <div className="text-gray-500 text-xs">{request.guests} guest{request.guests > 1 ? 's' : ''}</div>
                      <div className="text-gray-500 text-xs">via {request.source}</div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="text-xs">
                      <div>In: {request.checkIn}</div>
                      <div>Out: {request.checkOut}</div>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">${request.estimatedAmount.toFixed(2)}</td>
                  <td className="p-3">
                    <select
                      className={`px-2 py-1 text-xs font-medium rounded-full border-0 ${getStatusColor(request.status)}`}
                      value={request.status}
                      onChange={(e) => handleStatusChange(request.id, e.target.value)}
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className={`text-xs ${isOverdue(request.responseDeadline, request.status) ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {request.responseDeadline}
                      {isOverdue(request.responseDeadline, request.status) && (
                        <div className="flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>Overdue</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleViewClick(request)}
                        className="text-gray-600 hover:text-gray-800 p-1 rounded-md hover:bg-gray-50"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(request)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'Approved')}
                        className="text-green-600 hover:text-green-800 p-1 rounded-md hover:bg-green-50"
                        title="Approve"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'Rejected')}
                        className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50"
                        title="Reject"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(request.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-6 text-center text-gray-500">
                  <MessageSquare className="mx-auto mb-2 w-6 h-6" />
                  No booking requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add New Booking Request</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Guest Name *"
                value={newRequest.guestName}
                onChange={(e) => setNewRequest({ ...newRequest, guestName: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Email *"
                type="email"
                value={newRequest.email}
                onChange={(e) => setNewRequest({ ...newRequest, email: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Phone Number"
                value={newRequest.phone}
                onChange={(e) => setNewRequest({ ...newRequest, phone: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={newRequest.source}
                onChange={(e) => setNewRequest({ ...newRequest, source: e.target.value })}
              >
                {sourceOptions.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
              <select
                className="w-full px-3 py-2 border rounded"
                value={newRequest.roomType}
                onChange={(e) => setNewRequest({ ...newRequest, roomType: e.target.value })}
              >
                {roomTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-in Date"
                type="date"
                value={newRequest.checkIn}
                onChange={(e) => setNewRequest({ ...newRequest, checkIn: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-out Date"
                type="date"
                value={newRequest.checkOut}
                onChange={(e) => setNewRequest({ ...newRequest, checkOut: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Number of Guests"
                type="number"
                min="1"
                value={newRequest.guests}
                onChange={(e) => setNewRequest({ ...newRequest, guests: parseInt(e.target.value) })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Estimated Amount"
                type="number"
                step="0.01"
                value={newRequest.estimatedAmount}
                onChange={(e) => setNewRequest({ ...newRequest, estimatedAmount: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={newRequest.priority}
                onChange={(e) => setNewRequest({ ...newRequest, priority: e.target.value })}
              >
                {priorityOptions.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
              <select
                className="w-full px-3 py-2 border rounded"
                value={newRequest.assignedTo}
                onChange={(e) => setNewRequest({ ...newRequest, assignedTo: e.target.value })}
              >
                {staffOptions.map(staff => (
                  <option key={staff} value={staff}>{staff}</option>
                ))}
              </select>
            </div>
            
            <textarea
              className="w-full mt-4 px-3 py-2 border rounded"
              placeholder="Special Requests"
              rows="2"
              value={newRequest.specialRequests}
              onChange={(e) => setNewRequest({ ...newRequest, specialRequests: e.target.value })}
            />
            
            <textarea
              className="w-full mt-2 px-3 py-2 border rounded"
              placeholder="Guest Notes/Comments"
              rows="2"
              value={newRequest.guestNotes}
              onChange={(e) => setNewRequest({ ...newRequest, guestNotes: e.target.value })}
            />
            
            <div className="flex justify-end mt-6">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                disabled={!newRequest.guestName || !newRequest.email}
              >
                Add Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Request Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit Booking Request</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Guest Name"
                value={editRequest.guestName}
                onChange={(e) => setEditRequest({ ...editRequest, guestName: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Email"
                type="email"
                value={editRequest.email}
                onChange={(e) => setEditRequest({ ...editRequest, email: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Phone Number"
                value={editRequest.phone}
                onChange={(e) => setEditRequest({ ...editRequest, phone: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={editRequest.source}
                onChange={(e) => setEditRequest({ ...editRequest, source: e.target.value })}
              >
                {sourceOptions.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
              <select
                className="w-full px-3 py-2 border rounded"
                value={editRequest.roomType}
                onChange={(e) => setEditRequest({ ...editRequest, roomType: e.target.value })}
              >
                {roomTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-in Date"
                type="date"
                value={editRequest.checkIn}
                onChange={(e) => setEditRequest({ ...editRequest, checkIn: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Check-out Date"
                type="date"
                value={editRequest.checkOut}
                onChange={(e) => setEditRequest({ ...editRequest, checkOut: e.target.value })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Number of Guests"
                type="number"
                min="1"
                value={editRequest.guests}
                onChange={(e) => setEditRequest({ ...editRequest, guests: parseInt(e.target.value) })}
              />
              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Estimated Amount"
                type="number"
                step="0.01"
                value={editRequest.estimatedAmount}
                onChange={(e) => setEditRequest({ ...editRequest, estimatedAmount: e.target.value })}
              />
              <select
                className="w-full px-3 py-2 border rounded"
                value={editRequest.status}
                onChange={(e) => setEditRequest({ ...editRequest, status: e.target.value })}
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <select
                className="w-full px-3 py-2 border rounded"
                value={editRequest.priority}
                onChange={(e) => setEditRequest({ ...editRequest, priority: e.target.value })}
              >
                {priorityOptions.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
              <select
                className="w-full px-3 py-2 border rounded"
                value={editRequest.assignedTo}
                onChange={(e) => setEditRequest({ ...editRequest, assignedTo: e.target.value })}
              >
                {staffOptions.map(staff => (
                  <option key={staff} value={staff}>{staff}</option>
                ))}
              </select>
            </div>
            
            <textarea
              className="w-full mt-4 px-3 py-2 border rounded"
              placeholder="Special Requests"
              rows="2"
              value={editRequest.specialRequests}
              onChange={(e) => setEditRequest({ ...editRequest, specialRequests: e.target.value })}
            />
            
            <textarea
              className="w-full mt-2 px-3 py-2 border rounded"
              placeholder="Guest Notes/Comments"
              rows="2"
              value={editRequest.guestNotes}
              onChange={(e) => setEditRequest({ ...editRequest, guestNotes: e.target.value })}
            />
            
            <textarea
              className="w-full mt-2 px-3 py-2 border rounded bg-yellow-50"
              placeholder="Admin Notes (Internal Use)"
              rows="2"
              value={editRequest.adminNotes}
              onChange={(e) => setEditRequest({ ...editRequest, adminNotes: e.target.value })}
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
      )}

      {/* View Request Modal */}
      {isViewModalOpen && viewingRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold">Booking Request Details</h3>
                <p className="text-sm text-gray-600">Request ID: #{viewingRequest.id}</p>
              </div>
              <button onClick={() => setIsViewModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Status & Priority Header */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(viewingRequest.status)}`}>
                    {viewingRequest.status}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPriorityColor(viewingRequest.priority)}`}>
                    {viewingRequest.priority} Priority
                  </span>
                  {isOverdue(viewingRequest.responseDeadline, viewingRequest.status) && (
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>Overdue</span>
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  <div>Requested: {viewingRequest.requestDate}</div>
                  <div>Response Due: {viewingRequest.responseDeadline}</div>
                </div>
              </div>

              {/* Guest Information */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                  <span className="text-lg">{getSourceIcon(viewingRequest.source)}</span>
                  <span>Guest Information</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Guest Name</label>
                    <p className="text-gray-900">{viewingRequest.guestName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{viewingRequest.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-gray-900">{viewingRequest.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Request Source</label>
                    <p className="text-gray-900">{viewingRequest.source}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Assigned To</label>
                    <p className="text-gray-900">{viewingRequest.assignedTo}</p>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Booking Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Room Type</label>
                    <p className="text-gray-900">{viewingRequest.roomType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Number of Guests</label>
                    <p className="text-gray-900">{viewingRequest.guests}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Check-in Date</label>
                    <p className="text-gray-900">{viewingRequest.checkIn}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Check-out Date</label>
                    <p className="text-gray-900">{viewingRequest.checkOut}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Estimated Amount</label>
                    <p className="text-gray-900 font-semibold text-lg">${viewingRequest.estimatedAmount.toFixed(2)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Length of Stay</label>
                    <p className="text-gray-900">
                      {Math.ceil((new Date(viewingRequest.checkOut) - new Date(viewingRequest.checkIn)) / (1000 * 60 * 60 * 24))} nights
                    </p>
                  </div>
                </div>
              </div>

              {/* Guest Requests & Notes */}
              {(viewingRequest.specialRequests || viewingRequest.guestNotes) && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Guest Requests & Comments</h4>
                  {viewingRequest.specialRequests && (
                    <div className="mb-3">
                      <label className="text-sm font-medium text-gray-500">Special Requests</label>
                      <p className="text-gray-900 bg-blue-50 p-3 rounded mt-1">{viewingRequest.specialRequests}</p>
                    </div>
                  )}
                  {viewingRequest.guestNotes && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Guest Notes</label>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded mt-1">{viewingRequest.guestNotes}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Admin Notes */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Internal Notes</h4>
                <div className="bg-yellow-50 p-3 rounded">
                  <label className="text-sm font-medium text-gray-500">Admin Notes</label>
                  <p className="text-gray-900 mt-1">{viewingRequest.adminNotes || "No admin notes yet."}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Quick Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      handleStatusChange(viewingRequest.id, 'Approved');
                      setIsViewModalOpen(false);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Approve Request</span>
                  </button>
                  <button
                    onClick={() => {
                      handleStatusChange(viewingRequest.id, 'Under Review');
                      setIsViewModalOpen(false);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Mark Under Review</span>
                  </button>
                  <button
                    onClick={() => {
                      handleStatusChange(viewingRequest.id, 'Rejected');
                      setIsViewModalOpen(false);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Reject Request</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsViewModalOpen(false);
                      handleEditClick(viewingRequest);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit Details</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </button>
                </div>
              </div>
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

export default BookingRequests;