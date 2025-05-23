import React, { useState } from "react";
import { Search, Plus, Trash2, X, User, Edit, Filter } from "lucide-react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Clean Presidential Suite",
      description: "Deep cleaning and maintenance check",
      date: "2023-09-25",
      employee: "Floyd Miles",
      role: "Housekeeper",
      type: "Housekeeping",
      priority: "High",
      status: "Completed",
      progress: 100
    },
    {
      id: 2,
      title: "Prepare Welcome Dinner",
      description: "Special dinner for VIP guests",
      date: "2023-09-25",
      employee: "Jenny Wilson",
      role: "Chef",
      type: "Kitchen",
      priority: "High",
      status: "In Progress",
      progress: 75
    },
    {
      id: 3,
      title: "Fix Bathroom Plumbing",
      description: "Room 204 - leaking faucet",
      date: "2023-09-26",
      employee: "Robert Fox",
      role: "Maintenance",
      type: "Maintenance",
      priority: "Medium",
      status: "Pending",
      progress: 0
    },
    {
      id: 4,
      title: "Guest Check-in Assistance",
      description: "VIP guest arrival - premium service",
      date: "2023-09-26",
      employee: "Savannah Nguyen",
      role: "Concierge",
      type: "Front Desk",
      priority: "High",
      status: "Scheduled",
      progress: 0
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    employee: "",
    role: "",
    type: "Housekeeping",
    priority: "Medium",
    status: "Pending",
    progress: 0
  });
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    employee: "",
    role: "",
    type: "Housekeeping",
    priority: "Medium",
    status: "Pending",
    progress: 0
  });

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.employee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditTask({
      title: task.title,
      description: task.description,
      employee: task.employee,
      role: task.role,
      type: task.type,
      priority: task.priority,
      status: task.status,
      progress: task.progress
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map(task => 
      task.id === editingTaskId 
        ? { 
            ...task, 
            title: editTask.title,
            description: editTask.description,
            employee: editTask.employee,
            role: editTask.role,
            type: editTask.type,
            priority: editTask.priority,
            status: editTask.status,
            progress: editTask.progress
          }
        : task
    ));
    setIsEditModalOpen(false);
    setEditingTaskId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...tasks.map((task) => task.id), 0) + 1;
    const today = new Date().toISOString().split("T")[0];
    setTasks([
      ...tasks,
      {
        ...newTask,
        id: newId,
        date: today,
      },
    ]);
    setNewTask({
      title: "",
      description: "",
      employee: "",
      role: "",
      type: "Housekeeping",
      priority: "Medium",
      status: "Pending",
      progress: 0
    });
    setIsModalOpen(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-50 text-red-600 px-2 py-1 rounded text-sm";
      case "Medium": return "bg-yellow-50 text-yellow-600 px-2 py-1 rounded text-sm";
      case "Low": return "bg-green-50 text-green-600 px-2 py-1 rounded text-sm";
      default: return "bg-gray-50 text-gray-600 px-2 py-1 rounded text-sm";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-50 text-green-600 px-2 py-1 rounded text-sm";
      case "In Progress": return "bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm";
      case "Pending": return "bg-yellow-50 text-yellow-600 px-2 py-1 rounded text-sm";
      case "Scheduled": return "bg-purple-50 text-purple-600 px-2 py-1 rounded text-sm";
      default: return "bg-gray-50 text-gray-600 px-2 py-1 rounded text-sm";
    }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    return "bg-gray-300";
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Task Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Task
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3 mb-4">
        <input
          type="text"
          placeholder="Search tasks or employees..."
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
              <th className="p-3">Task Details</th>
              <th className="p-3">Employee</th>
              <th className="p-3">Type</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredTasks.length ? (
              filteredTasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div>
                      <div className="font-semibold text-gray-900">{task.title}</div>
                      <div className="text-gray-500 text-sm">{task.description}</div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-semibold">{task.employee}</div>
                        <div className="text-gray-500">{task.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{task.type}</td>
                  <td className="p-3">
                    <span className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={getStatusColor(task.status)}>
                      {task.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                        <div
                          className={`h-2 rounded-full ${getProgressColor(task.progress)}`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{task.progress}%</span>
                    </div>
                  </td>
                  <td className="p-3">{task.date}</td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditClick(task)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
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
                  <Filter className="mx-auto mb-2 w-6 h-6" />
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add Task</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
            <textarea
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Task Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Employee Name"
              value={newTask.employee}
              onChange={(e) =>
                setNewTask({ ...newTask, employee: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Employee Role"
              value={newTask.role}
              onChange={(e) =>
                setNewTask({ ...newTask, role: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newTask.type}
              onChange={(e) =>
                setNewTask({ ...newTask, type: e.target.value })
              }
            >
              <option value="Housekeeping">Housekeeping</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Front Desk">Front Desk</option>
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value })
              }
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={newTask.status}
              onChange={(e) =>
                setNewTask({ ...newTask, status: e.target.value })
              }
            >
              <option value="Pending">Pending</option>
              <option value="Scheduled">Scheduled</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              type="number"
              min="0"
              max="100"
              placeholder="Progress (%)"
              value={newTask.progress}
              onChange={(e) =>
                setNewTask({ ...newTask, progress: parseInt(e.target.value) || 0 })
              }
            />
            <div className="flex justify-end">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit Task</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Task Title"
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
            />
            <textarea
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Task Description"
              value={editTask.description}
              onChange={(e) =>
                setEditTask({ ...editTask, description: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Employee Name"
              value={editTask.employee}
              onChange={(e) =>
                setEditTask({ ...editTask, employee: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Employee Role"
              value={editTask.role}
              onChange={(e) =>
                setEditTask({ ...editTask, role: e.target.value })
              }
            />
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editTask.type}
              onChange={(e) =>
                setEditTask({ ...editTask, type: e.target.value })
              }
            >
              <option value="Housekeeping">Housekeeping</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Front Desk">Front Desk</option>
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editTask.priority}
              onChange={(e) =>
                setEditTask({ ...editTask, priority: e.target.value })
              }
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <select
              className="w-full mb-3 px-3 py-2 border rounded"
              value={editTask.status}
              onChange={(e) =>
                setEditTask({ ...editTask, status: e.target.value })
              }
            >
              <option value="Pending">Pending</option>
              <option value="Scheduled">Scheduled</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              type="number"
              min="0"
              max="100"
              placeholder="Progress (%)"
              value={editTask.progress}
              onChange={(e) =>
                setEditTask({ ...editTask, progress: parseInt(e.target.value) || 0 })
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

export default TaskManagement;