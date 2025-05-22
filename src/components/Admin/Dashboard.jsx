import { useState } from "react";
import { 
  Search, 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  MessageSquare, 
  Eye, 
  Bookmark, 
  Edit, 
  PlusCircle, 
  Check, 
  X, 
  Home, 
  DollarSign, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Bell,
  MessageCircle,
  ChevronDown,
  User,
  Filter,
  MoreVertical,
  TrendingUp,
  Building2,
  UserCheck,
  ClipboardList
} from "lucide-react";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import TestimonialsView from "./Testimonials";
import BookingsView from "./ViewBooking";
import OfflineBookingsView from './OfflineBooking'
import CreateBookingView from './ManageBooking'
import RequestsView from './BookingRequest'
import RoomsView from './BookManagement'
import UsersView from './RegisteredUsers'
// Simplified components for each menu section
const CalendarView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Calendar</h2>
    <p>Calendar content goes here</p>
  </div>
);

const ScheduleView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Work Schedule</h2>
    <p>Schedule content goes here</p>
  </div>
);

const TasksView = ({ tasks, activeTab, setActiveTab, getPriorityColor, getStatusColor }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
        
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "all"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("inProgress")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "inProgress"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "completed"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Completed
            </button>
          </div>
          
          <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Task Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Progress
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div>
                  <div className="text-sm font-medium text-gray-900">{task.name}</div>
                  <div className="text-sm text-gray-500">{task.description}</div>
                  <div className="text-xs text-gray-400 mt-1">{task.date}</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{task.employee}</div>
                    <div className="text-xs text-gray-500">{task.role}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-900">{task.type}</span>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${task.completion}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{task.completion}%</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const EmployeesView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Employees</h2>
    <p>Employees content goes here</p>
  </div>
);

// const VideoGallery = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Video Gallery</h2>
//     <p>Video gallery content goes here</p>
//   </div>
// );

// const TestimonialsView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Testimonials</h2>
//     <p>Testimonials content goes here</p>
//   </div>
// );

const SubmissionsView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Content Submissions</h2>
    <p>Submissions content goes here</p>
  </div>
);

// const BookingsView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">View Bookings</h2>
//     <p>Bookings content goes here</p>
//   </div>
// );

// const OfflineBookingsView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Offline Bookings</h2>
//     <p>Offline bookings content goes here</p>
//   </div>
// );

// const CreateBookingView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Create Booking</h2>
//     <p>Create booking form goes here</p>
//   </div>
// );

// const RequestsView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Booking Requests</h2>
//     <p>Booking requests content goes here</p>
//   </div>
// );

// const RoomsView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Room Management</h2>
//     <p>Room management content goes here</p>
//   </div>
// );

// const UsersView = () => (
//   <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//     <h2 className="text-xl font-bold mb-4">Registered Users</h2>
//     <p>Users content goes here</p>
//   </div>
// );

const AnalyticsView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Analytics</h2>
    <p>Analytics content goes here</p>
  </div>
);

const SettingsView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Settings</h2>
    <p>Settings content goes here</p>
  </div>
);

const HotelDashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentView, setCurrentView] = useState("dashboard");
  
  // Theme colors
  const colors = {
    primary: "#1e40af",     // Modern blue
    secondary: "#3b82f6",   // Lighter blue
    accent: "#f8fafc",      // Very light gray
    success: "#10b981",     // Green
    warning: "#f59e0b",     // Amber
    danger: "#ef4444",      // Red
  };

  // Organized menu items
  const menuItems = [
    {
      category: "Main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "calendar", label: "Calendar", icon: Calendar },
        { id: "schedule", label: "Work Schedule", icon: Clock },
        { id: "tasks", label: "Tasks", icon: FileText, active: true },
        { id: "employees", label: "Employees", icon: Users },
      ]
    },
    {
      category: "Content Management",
      items: [
        { id: "gallery", label: "Image Gallery", icon: ImageIcon },
        { id: "videos", label: "Video Gallery", icon: Video },
        { id: "testimonials", label: "Testimonials", icon: MessageSquare },
        { id: "submissions", label: "Content Submissions", icon: Eye },
      ]
    },
    {
      category: "Booking Management",
      items: [
        { id: "bookings", label: "View Bookings", icon: Bookmark },
        { id: "offline-bookings", label: "Offline Bookings", icon: Edit },
        { id: "create-booking", label: "Manage Booking", icon: PlusCircle },
        { id: "requests", label: "Booking Requests", icon: Check },
        { id: "rooms", label: "Room Management", icon: Building2 },
      ]
    },
    {
      category: "Administration",
      items: [
        { id: "users", label: "Registered Users", icon: UserCheck },
        // { id: "analytics", label: "Analytics", icon: BarChart3 },
        // { id: "settings", label: "Settings", icon: Settings },
      ]
    }
  ];
  
  // Sample data for the tasks
  const tasks = [
    { 
      id: 1, 
      date: "Mon, 25.09.2023 17:00", 
      name: "Clean Presidential Suite", 
      description: "Deep cleaning and maintenance check", 
      employee: "Floyd Miles", 
      role: "Housekeeper", 
      completion: 100, 
      type: "Housekeeping",
      status: "Completed",
      priority: "High"
    },
    { 
      id: 2, 
      date: "Mon, 25.09.2023 17:00", 
      name: "Prepare Welcome Dinner", 
      description: "Special dinner for VIP guests", 
      employee: "Jenny Wilson", 
      role: "Chef", 
      completion: 75, 
      type: "Kitchen",
      status: "In Progress",
      priority: "High"
    },
    { 
      id: 3, 
      date: "Tue, 26.09.2023 09:00", 
      name: "Fix Bathroom Plumbing", 
      description: "Room 204 - leaking faucet", 
      employee: "Robert Fox", 
      role: "Maintenance", 
      completion: 0, 
      type: "Maintenance",
      status: "Pending",
      priority: "Medium"
    },
    { 
      id: 4, 
      date: "Tue, 26.09.2023 14:00", 
      name: "Guest Check-in Assistance", 
      description: "VIP guest arrival - premium service", 
      employee: "Savannah Nguyen", 
      role: "Concierge", 
      completion: 0, 
      type: "Front Desk",
      status: "Scheduled",
      priority: "High"
    },
  ];

  // Department stats
  const departmentStats = [
    { name: "Housekeeping", tasks: 45, completed: 38, color: "bg-blue-500" },
    { name: "Kitchen", tasks: 32, completed: 28, color: "bg-green-500" },
    { name: "Maintenance", tasks: 18, completed: 15, color: "bg-yellow-500" },
    { name: "Front Desk", tasks: 25, completed: 22, color: "bg-purple-500" }
  ];

  const filteredTasks = tasks.filter(task => {
    if (activeTab === "all") return true;
    if (activeTab === "completed") return task.status === "Completed";
    if (activeTab === "inProgress") return task.status === "In Progress";
    return false;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Scheduled": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleNavigation = (id) => {
    setCurrentView(id);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">120</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 ml-1">+12% from last week</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <ClipboardList className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">103</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 ml-1">85.8% completion rate</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">In Progress</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
                    <div className="flex items-center mt-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-blue-600 ml-1">10% of total</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Overdue</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
                    <div className="flex items-center mt-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-600 ml-1">Needs attention</span>
                    </div>
                  </div>
                  <div className="bg-red-100 p-3 rounded-lg">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Department Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
                <div className="space-y-4">
                  {departmentStats.map((dept) => (
                    <div key={dept.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${dept.color} mr-3`}></div>
                        <span className="text-sm font-medium text-gray-900">{dept.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">{dept.completed}/{dept.tasks}</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${dept.color}`}
                            style={{ width: `${(dept.completed / dept.tasks) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-12 text-right">
                          {Math.round((dept.completed / dept.tasks) * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Create New Task
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Assign Tasks
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>

            <TasksView 
              tasks={filteredTasks} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              getPriorityColor={getPriorityColor}
              getStatusColor={getStatusColor}
            />
          </>
        );
      case "gallery":
        return <ImageGallery />;
      case "calendar":
        return <CalendarView />;
      case "schedule":
        return <ScheduleView />;
      case "tasks":
        return <TasksView 
          tasks={filteredTasks} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          getPriorityColor={getPriorityColor}
          getStatusColor={getStatusColor}
        />;
      case "employees":
        return <EmployeesView />;
      case "videos":
        return <VideoGallery />;
      case "testimonials":
        return <TestimonialsView />;
      case "submissions":
        return <SubmissionsView />;
      case "bookings":
        return <BookingsView />;
      case "offline-bookings":
        return <OfflineBookingsView />;
      case "create-booking":
        return <CreateBookingView />;
      case "requests":
        return <RequestsView />;
      case "rooms":
        return <RoomsView />;
      case "users":
        return <UsersView />;
      case "analytics":
        return <AnalyticsView />;
      case "settings":
        return <SettingsView />;
      default:
        return <div>Select a view</div>;
    }
  };

  const getViewTitle = () => {
    const view = menuItems
      .flatMap(category => category.items)
      .find(item => item.id === currentView);
    return view ? view.label : "Dashboard";
  };

  const getViewDescription = () => {
    switch (currentView) {
      case "dashboard": return "Overview of hotel operations";
      case "gallery": return "Manage hotel images and media";
      case "calendar": return "View and manage events calendar";
      case "schedule": return "Manage employee work schedules";
      case "tasks": return "Manage and track all hotel tasks";
      case "employees": return "Manage hotel staff and employees";
      case "videos": return "Manage hotel video content";
      case "testimonials": return "View and manage guest testimonials";
      case "submissions": return "Manage content submissions";
      case "bookings": return "View and manage hotel bookings";
      case "offline-bookings": return "Manage offline bookings";
      case "create-booking": return "Create new bookings";
      case "requests": return "Manage booking requests";
      case "rooms": return "Manage hotel rooms and inventory";
      case "users": return "Manage registered users";
      case "analytics": return "View hotel analytics and reports";
      case "settings": return "Configure hotel settings";
      default: return "Dashboard overview";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">BILTON</h1>
          <p className="text-sm text-gray-500 mt-1">Management Dashboard</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((category) => (
            <div key={category.category} className="mb-6">
              <h3 className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {category.category}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigation(item.id)}
                        className={`w-full flex items-center px-6 py-3 text-sm font-medium rounded-r-full transition-colors ${
                          currentView === item.id
                            ? `bg-blue-50 text-blue-700 border-r-4 border-blue-700`
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className="p-6 border-t">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Adam Smith</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="h-18">
                <h1 className="text-2xl font-bold text-gray-900">
                  {getViewTitle()}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  {getViewDescription()}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={currentView === "gallery" ? "Search images..." : `Search ${currentView}...`}
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
                
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <MessageCircle className="w-6 h-6" />
                </button>
                
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                  <span className="text-sm font-medium text-gray-700">BILTON</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default HotelDashboard;