import React, { useState } from "react";
import { Search, Plus, Trash2, X, Bed, Edit, Users, Wifi, Car, Coffee } from "lucide-react";

const RoomManagementView = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNumber: "101",
      type: "Standard Single",
      status: "Available",
      capacity: 1,
      price: 120,
      amenities: ["Wifi", "AC", "TV"],
      lastCleaned: "2024-05-22",
      image: "/api/placeholder/150/100",
    },
    {
      id: 2,
      roomNumber: "102",
      type: "Deluxe Double",
      status: "Occupied",
      capacity: 2,
      price: 180,
      amenities: ["Wifi", "AC", "TV", "Mini Bar"],
      lastCleaned: "2024-05-21",
      image: "/api/placeholder/150/100",
    },
    {
      id: 3,
      roomNumber: "201",
      type: "Suite",
      status: "Maintenance",
      capacity: 4,
      price: 350,
      amenities: ["Wifi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi"],
      lastCleaned: "2024-05-20",
      image: "/api/placeholder/150/100",
    },
    {
      id: 4,
      roomNumber: "202",
      type: "Standard Double",
      status: "Available",
      capacity: 2,
      price: 150,
      amenities: ["Wifi", "AC", "TV"],
      lastCleaned: "2024-05-22",
      image: "/api/placeholder/150/100",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [newRoom, setNewRoom] = useState({
    roomNumber: "",
    type: "",
    status: "Available",
    capacity: 1,
    price: 0,
    amenities: [],
  });
  const [editRoom, setEditRoom] = useState({
    roomNumber: "",
    type: "",
    status: "Available",
    capacity: 1,
    price: 0,
    amenities: [],
  });

  const roomTypes = ["Standard Single", "Standard Double", "Deluxe Double", "Suite", "Family Room"];
  const statusOptions = ["Available", "Occupied", "Maintenance", "Out of Order"];
  const availableAmenities = ["Wifi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi", "Kitchen", "Parking"];

  const filteredRooms = rooms.filter((room) =>
    room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Delete this room?")) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  const handleEditClick = (room) => {
    setEditingRoomId(room.id);
    setEditRoom({
      roomNumber: room.roomNumber,
      type: room.type,
      status: room.status,
      capacity: room.capacity,
      price: room.price,
      amenities: [...room.amenities],
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setRooms(rooms.map(room => 
      room.id === editingRoomId 
        ? { 
            ...room, 
            roomNumber: editRoom.roomNumber,
            type: editRoom.type,
            status: editRoom.status,
            capacity: editRoom.capacity,
            price: editRoom.price,
            amenities: editRoom.amenities,
            lastCleaned: new Date().toISOString().split("T")[0]
          }
        : room
    ));
    setIsEditModalOpen(false);
    setEditingRoomId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...rooms.map((room) => room.id), 0) + 1;
    const today = new Date().toISOString().split("T")[0];
    setRooms([
      ...rooms,
      {
        ...newRoom,
        id: newId,
        lastCleaned: today,
        image: "/api/placeholder/150/100",
      },
    ]);
    setNewRoom({
      roomNumber: "",
      type: "",
      status: "Available",
      capacity: 1,
      price: 0,
      amenities: [],
    });
    setIsModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Occupied":
        return "bg-blue-100 text-blue-800";
      case "Maintenance":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Order":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAmenityToggle = (amenity, isEdit = false) => {
    const currentRoom = isEdit ? editRoom : newRoom;
    const setCurrentRoom = isEdit ? setEditRoom : setNewRoom;
    
    const updatedAmenities = currentRoom.amenities.includes(amenity)
      ? currentRoom.amenities.filter(a => a !== amenity)
      : [...currentRoom.amenities, amenity];
    
    setCurrentRoom({ ...currentRoom, amenities: updatedAmenities });
  };

  const renderAmenityIcon = (amenity) => {
    switch (amenity) {
      case "Wifi":
        return <Wifi className="w-4 h-4" />;
      case "Parking":
        return <Car className="w-4 h-4" />;
      case "Mini Bar":
        return <Coffee className="w-4 h-4" />;
      default:
        return <span className="w-4 h-4 flex items-center justify-center text-xs">•</span>;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Room Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Room
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3 mb-4">
        <input
          type="text"
          placeholder="Search rooms..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-600">
            <tr>
              <th className="p-3">Room</th>
              <th className="p-3">Status</th>
              <th className="p-3">Capacity</th>
              <th className="p-3">Price</th>
              <th className="p-3">Amenities</th>
              <th className="p-3">Last Cleaned</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredRooms.length ? (
              filteredRooms.map((room) => (
                <tr key={room.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center space-x-3">
                    <img
                      src={room.image}
                      alt={`Room ${room.roomNumber}`}
                      className="w-12 h-8 rounded object-cover"
                    />
                    <div>
                      <div className="font-semibold">Room {room.roomNumber}</div>
                      <div className="text-gray-500">{room.type}</div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                      {room.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-gray-400" />
                      {room.capacity}
                    </div>
                  </td>
                  <td className="p-3 font-medium">${room.price}/night</td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                        >
                          {renderAmenityIcon(amenity)}
                          <span className="ml-1">{amenity}</span>
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="text-xs text-gray-500">+{room.amenities.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-3">{room.lastCleaned}</td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditClick(room)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(room.id)}
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
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  <Bed className="mx-auto mb-2 w-6 h-6" />
                  No rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Room Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add Room</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Room Number"
              value={newRoom.roomNumber}
              onChange={(e) =>
                setNewRoom({ ...newRoom, roomNumber: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newRoom.type}
              onChange={(e) =>
                setNewRoom({ ...newRoom, type: e.target.value })
              }
            >
              <option value="">Select Room Type</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newRoom.status}
              onChange={(e) =>
                setNewRoom({ ...newRoom, status: e.target.value })
              }
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <input
              type="number"
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Capacity"
              value={newRoom.capacity}
              onChange={(e) =>
                setNewRoom({ ...newRoom, capacity: parseInt(e.target.value) || 1 })
              }
            />
            <input
              type="number"
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Price per night"
              value={newRoom.price}
              onChange={(e) =>
                setNewRoom({ ...newRoom, price: parseFloat(e.target.value) || 0 })
              }
            />
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="grid grid-cols-2 gap-2">
                {availableAmenities.map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newRoom.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="mr-2"
                    />
                    <span className="text-sm">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Room Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit Room</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Room Number"
              value={editRoom.roomNumber}
              onChange={(e) =>
                setEditRoom({ ...editRoom, roomNumber: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editRoom.type}
              onChange={(e) =>
                setEditRoom({ ...editRoom, type: e.target.value })
              }
            >
              <option value="">Select Room Type</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editRoom.status}
              onChange={(e) =>
                setEditRoom({ ...editRoom, status: e.target.value })
              }
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <input
              type="number"
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Capacity"
              value={editRoom.capacity}
              onChange={(e) =>
                setEditRoom({ ...editRoom, capacity: parseInt(e.target.value) || 1 })
              }
            />
            <input
              type="number"
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Price per night"
              value={editRoom.price}
              onChange={(e) =>
                setEditRoom({ ...editRoom, price: parseFloat(e.target.value) || 0 })
              }
            />
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="grid grid-cols-2 gap-2">
                {availableAmenities.map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editRoom.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity, true)}
                      className="mr-2"
                    />
                    <span className="text-sm">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-3">
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
    </div>
  );
};

export default RoomManagementView;