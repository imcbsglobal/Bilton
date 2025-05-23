import React, { useState } from "react";
import { Search, Plus, Trash2, X, User, Edit, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const WorkSchedule = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      employee: "Floyd Miles",
      role: "Housekeeper",
      department: "Housekeeping",
      date: "2023-10-15",
      startTime: "08:00",
      endTime: "16:00",
      shift: "Day Shift",
      status: "Scheduled",
      location: "Floor 1-3"
    },
    {
      id: 2,
      employee: "Jenny Wilson",
      role: "Chef",
      department: "Kitchen",
      date: "2023-10-15",
      startTime: "06:00",
      endTime: "14:00",
      shift: "Morning Shift",
      status: "Confirmed",
      location: "Main Kitchen"
    },
    {
      id: 3,
      employee: "Robert Fox",
      role: "Maintenance",
      department: "Maintenance",
      date: "2023-10-15",
      startTime: "09:00",
      endTime: "17:00",
      shift: "Day Shift",
      status: "Scheduled",
      location: "Building A"
    },
    {
      id: 4,
      employee: "Savannah Nguyen",
      role: "Concierge",
      department: "Front Desk",
      date: "2023-10-15",
      startTime: "14:00",
      endTime: "22:00",
      shift: "Evening Shift",
      status: "Confirmed",
      location: "Lobby"
    },
    {
      id: 5,
      employee: "Devon Lane",
      role: "Security",
      department: "Security",
      date: "2023-10-15",
      startTime: "22:00",
      endTime: "06:00",
      shift: "Night Shift",
      status: "Scheduled",
      location: "Main Entrance"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("2023-10-15");
  const [viewMode, setViewMode] = useState("daily"); // daily, weekly
  
  const [newSchedule, setNewSchedule] = useState({
    employee: "",
    role: "",
    department: "Housekeeping",
    date: "",
    startTime: "09:00",
    endTime: "17:00",
    shift: "Day Shift",
    status: "Scheduled",
    location: ""
  });
  
  const [editSchedule, setEditSchedule] = useState({
    employee: "",
    role: "",
    department: "Housekeeping",
    date: "",
    startTime: "09:00",
    endTime: "17:00",
    shift: "Day Shift",
    status: "Scheduled",
    location: ""
  });

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearch = schedule.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         schedule.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         schedule.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (viewMode === "daily") {
      return matchesSearch && schedule.date === selectedDate;
    }
    return matchesSearch;
  });

  const handleDelete = (id) => {
    if (window.confirm("Delete this schedule?")) {
      setSchedules(schedules.filter((schedule) => schedule.id !== id));
    }
  };

  const handleEditClick = (schedule) => {
    setEditingScheduleId(schedule.id);
    setEditSchedule({
      employee: schedule.employee,
      role: schedule.role,
      department: schedule.department,
      date: schedule.date,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      shift: schedule.shift,
      status: schedule.status,
      location: schedule.location
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setSchedules(schedules.map(schedule => 
      schedule.id === editingScheduleId 
        ? { 
            ...schedule, 
            employee: editSchedule.employee,
            role: editSchedule.role,
            department: editSchedule.department,
            date: editSchedule.date,
            startTime: editSchedule.startTime,
            endTime: editSchedule.endTime,
            shift: editSchedule.shift,
            status: editSchedule.status,
            location: editSchedule.location
          }
        : schedule
    ));
    setIsEditModalOpen(false);
    setEditingScheduleId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...schedules.map((schedule) => schedule.id), 0) + 1;
    setSchedules([
      ...schedules,
      {
        ...newSchedule,
        id: newId,
      },
    ]);
    setNewSchedule({
      employee: "",
      role: "",
      department: "Housekeeping",
      date: "",
      startTime: "09:00",
      endTime: "17:00",
      shift: "Day Shift",
      status: "Scheduled",
      location: ""
    });
    setIsModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-green-50 text-green-600 px-2 py-1 rounded text-sm";
      case "Scheduled": return "bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm";
      case "Cancelled": return "bg-red-50 text-red-600 px-2 py-1 rounded text-sm";
      case "Completed": return "bg-gray-50 text-gray-600 px-2 py-1 rounded text-sm";
      default: return "bg-gray-50 text-gray-600 px-2 py-1 rounded text-sm";
    }
  };

  const getShiftColor = (shift) => {
    switch (shift) {
      case "Morning Shift": return "bg-yellow-50 text-yellow-600 px-2 py-1 rounded text-sm";
      case "Day Shift": return "bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm";
      case "Evening Shift": return "bg-orange-50 text-orange-600 px-2 py-1 rounded text-sm";
      case "Night Shift": return "bg-purple-50 text-purple-600 px-2 py-1 rounded text-sm";
      default: return "bg-gray-50 text-gray-600 px-2 py-1 rounded text-sm";
    }
  };

  const calculateHours = (start, end) => {
    const startTime = new Date(`2000-01-01 ${start}:00`);
    const endTime = new Date(`2000-01-01 ${end}:00`);
    let diff = (endTime - startTime) / (1000 * 60 * 60);
    
    // Handle overnight shifts
    if (diff < 0) {
      diff += 24;
    }
    
    return diff;
  };

  const navigateDate = (direction) => {
    const currentDate = new Date(selectedDate);
    if (direction === 'prev') {
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Work Schedule</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Schedule
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search employees or departments..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>

        {/* Date Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateDate('prev')}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">
                {formatDate(selectedDate)}
              </span>
            </div>
            <button
              onClick={() => navigateDate('next')}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Schedule Summary */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{filteredSchedules.length}</div>
          <div className="text-blue-600 text-sm">Total Scheduled</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {filteredSchedules.filter(s => s.status === 'Confirmed').length}
          </div>
          <div className="text-green-600 text-sm">Confirmed</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">
            {filteredSchedules.filter(s => s.status === 'Scheduled').length}
          </div>
          <div className="text-yellow-600 text-sm">Pending</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {filteredSchedules.reduce((total, s) => total + calculateHours(s.startTime, s.endTime), 0)}
          </div>
          <div className="text-purple-600 text-sm">Total Hours</div>
        </div>
      </div> */}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-600">
            <tr>
              <th className="p-3">Employee</th>
              <th className="p-3">Time</th>
              <th className="p-3">Shift</th>
              <th className="p-3">Department</th>
              <th className="p-3">Location</th>
              <th className="p-3">Hours</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredSchedules.length ? (
              filteredSchedules.map((schedule) => (
                <tr key={schedule.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-semibold">{schedule.employee}</div>
                        <div className="text-gray-500">{schedule.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{schedule.startTime} - {schedule.endTime}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={getShiftColor(schedule.shift)}>
                      {schedule.shift}
                    </span>
                  </td>
                  <td className="p-3">{schedule.department}</td>
                  <td className="p-3">{schedule.location}</td>
                  <td className="p-3">
                    <span className="font-medium">
                      {calculateHours(schedule.startTime, schedule.endTime)}h
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={getStatusColor(schedule.status)}>
                      {schedule.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditClick(schedule)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(schedule.id)}
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
                  <Calendar className="mx-auto mb-2 w-6 h-6" />
                  No schedules found for the selected date.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Schedule Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add Schedule</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Employee Name"
              value={newSchedule.employee}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, employee: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Role"
              value={newSchedule.role}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, role: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newSchedule.department}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, department: e.target.value })
              }
            >
              <option value="Housekeeping">Housekeeping</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Front Desk">Front Desk</option>
              <option value="Security">Security</option>
            </select>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              type="date"
              value={newSchedule.date}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, date: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                className="px-3 py-2 border rounded"
                type="time"
                value={newSchedule.startTime}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, startTime: e.target.value })
                }
              />
              <input
                className="px-3 py-2 border rounded"
                type="time"
                value={newSchedule.endTime}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, endTime: e.target.value })
                }
              />
            </div>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newSchedule.shift}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, shift: e.target.value })
              }
            >
              <option value="Morning Shift">Morning Shift</option>
              <option value="Day Shift">Day Shift</option>
              <option value="Evening Shift">Evening Shift</option>
              <option value="Night Shift">Night Shift</option>
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newSchedule.status}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, status: e.target.value })
              }
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Location"
              value={newSchedule.location}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, location: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Schedule Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit Schedule</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Employee Name"
              value={editSchedule.employee}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, employee: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Role"
              value={editSchedule.role}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, role: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editSchedule.department}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, department: e.target.value })
              }
            >
              <option value="Housekeeping">Housekeeping</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Front Desk">Front Desk</option>
              <option value="Security">Security</option>
            </select>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              type="date"
              value={editSchedule.date}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, date: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                className="px-3 py-2 border rounded"
                type="time"
                value={editSchedule.startTime}
                onChange={(e) =>
                  setEditSchedule({ ...editSchedule, startTime: e.target.value })
                }
              />
              <input
                className="px-3 py-2 border rounded"
                type="time"
                value={editSchedule.endTime}
                onChange={(e) =>
                  setEditSchedule({ ...editSchedule, endTime: e.target.value })
                }
              />
            </div>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editSchedule.shift}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, shift: e.target.value })
              }
            >
              <option value="Morning Shift">Morning Shift</option>
              <option value="Day Shift">Day Shift</option>
              <option value="Evening Shift">Evening Shift</option>
              <option value="Night Shift">Night Shift</option>
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editSchedule.status}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, status: e.target.value })
              }
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Location"
              value={editSchedule.location}
              onChange={(e) =>
                setEditSchedule({ ...editSchedule, location: e.target.value })
              }
            />
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

export default WorkSchedule;