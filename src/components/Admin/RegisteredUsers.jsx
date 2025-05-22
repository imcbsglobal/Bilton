import React, { useState } from "react";
import { Search, Plus, Trash2, X, Users, Edit, Mail, Phone, Calendar } from "lucide-react";

const RegisteredUsersView = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      joinDate: "2023-08-15",
      status: "Active",
      lastLogin: "2023-11-20",
      bookings: 3,
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 987-6543",
      joinDate: "2023-09-22",
      status: "Active",
      lastLogin: "2023-11-18",
      bookings: 7,
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      phone: "+1 (555) 456-7890",
      joinDate: "2023-07-10",
      status: "Inactive",
      lastLogin: "2023-10-05",
      bookings: 1,
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      phone: "+1 (555) 321-9876",
      joinDate: "2023-10-03",
      status: "Active",
      lastLogin: "2023-11-21",
      bookings: 12,
      avatar: "/api/placeholder/100/100",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Delete this user? This action cannot be undone.")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditUser({
      name: user.name,
      email: user.email,
      phone: user.phone,
      status: user.status,
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setUsers(users.map(user => 
      user.id === editingUserId 
        ? { 
            ...user, 
            name: editUser.name,
            email: editUser.email,
            phone: editUser.phone,
            status: editUser.status
          }
        : user
    ));
    setIsEditModalOpen(false);
    setEditingUserId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...users.map((user) => user.id), 0) + 1;
    const today = new Date().toISOString().split("T")[0];
    setUsers([
      ...users,
      {
        ...newUser,
        id: newId,
        joinDate: today,
        lastLogin: "Never",
        bookings: 0,
        avatar: "/api/placeholder/100/100",
      },
    ]);
    setNewUser({
      name: "",
      email: "",
      phone: "",
      status: "Active",
    });
    setIsModalOpen(false);
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    if (status === "Active") {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else {
      return `${baseClasses} bg-red-100 text-red-800`;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Registered Users</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your hotel's registered guests</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-xl font-bold text-gray-800">{users.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-xl font-bold text-gray-800">
                {users.filter(u => u.status === "Active").length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-xl font-bold text-gray-800">
                {users.reduce((sum, user) => sum + user.bookings, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
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
              <th className="p-3">User</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
              <th className="p-3">Join Date</th>
              <th className="p-3">Last Login</th>
              <th className="p-3">Bookings</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredUsers.length ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-gray-500 text-xs">ID: {user.id}</div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center text-xs text-gray-600 mb-1">
                      <Mail className="w-3 h-3 mr-1" />
                      {user.email}
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Phone className="w-3 h-3 mr-1" />
                      {user.phone}
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={getStatusBadge(user.status)}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3">{user.joinDate}</td>
                  <td className="p-3">{user.lastLogin}</td>
                  <td className="p-3">
                    <span className="font-medium">{user.bookings}</span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditClick(user)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit User"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50"
                        title="Delete User"
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
                  <Users className="mx-auto mb-2 w-6 h-6" />
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add New User</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Full Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Email Address"
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Phone Number"
              value={newUser.phone}
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit User</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Full Name"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Email Address"
              type="email"
              value={editUser.email}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Phone Number"
              value={editUser.phone}
              onChange={(e) =>
                setEditUser({ ...editUser, phone: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editUser.status}
              onChange={(e) =>
                setEditUser({ ...editUser, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
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

export default RegisteredUsersView;