import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
  ClipboardList,
  LogOut,
  Menu
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import TestimonialsView from "./Testimonials";
import BookingsView from "./ViewBooking";
import OfflineBookingsView from './OfflineBooking'
import CreateBookingView from './ManageBooking'
import RequestsView from './BookingRequest'
import RoomsView from './BookManagement'
import UsersView from './RegisteredUsers'
import CalendarView from './Calender'
import TasksView from './Task'
import ScheduleView from './WorkShedule'
import EmployeesView from './Employees'

const SubmissionsView = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-bold mb-4">Content Submissions</h2>
    <p>Submissions content goes here</p>
  </div>
);

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Theme colors
  const colors = {
    primary: "#1e40af",     // Modern blue
    secondary: "#3b82f6",   // Lighter blue
    accent: "#f8fafc",      // Very light gray
    success: "#10b981",     // Green
    warning: "#f59e0b",     // Amber
    danger: "#ef4444",      // Red
  };

  // Sample booking data for the last 6 months
  const bookingData = [
    { name: 'Jan', previous: 85, current: 92 },
    { name: 'Feb', previous: 78, current: 89 },
    { name: 'Mar', previous: 92, current: 105 },
    { name: 'Apr', previous: 88, current: 94 },
    { name: 'May', previous: 95, current: 120 },
    { name: 'Jun', previous: 102, current: 135 },
  ];

  // Sample profit data for the last 6 months
  const profitData = [
    { name: 'Jan', previous: 42500, current: 46000 },
    { name: 'Feb', previous: 39000, current: 44500 },
    { name: 'Mar', previous: 46000, current: 52500 },
    { name: 'Apr', previous: 44000, current: 47000 },
    { name: 'May', previous: 47500, current: 60000 },
    { name: 'Jun', previous: 51000, current: 67500 },
  ];

  // Organized menu items
  const menuItems = [
    {
      category: "Main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "calendar", label: "Calendar", icon: Calendar },
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
    if (windowWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Total Bookings</p>
                    <p className="text-xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">120</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                      <span className="text-xs md:text-sm text-green-600 ml-1">+12% from last week</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg">
                    <ClipboardList className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Total Check-in</p>
                    <p className="text-xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">103</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                      <span className="text-xs md:text-sm text-green-600 ml-1">85.8% completion rate</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-2 md:p-3 rounded-lg">
                    <Check className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Online Bookings</p>
                    <p className="text-xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">12</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      <span className="text-xs md:text-sm text-blue-600 ml-1">10% of total</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg">
                    <Clock className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Offline Bookings</p>
                    <p className="text-xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">18</p>
                    <div className="flex items-center mt-1 md:mt-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      <span className="text-xs md:text-sm text-blue-600 ml-1">10% of total</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg">
                    <Clock className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Bookings Chart */}
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Monthly Bookings Comparison</h3>
                <div className="h-60 md:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={bookingData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="previous" fill="#8884d8" name="Previous Month" />
                      <Bar dataKey="current" fill="#82ca9d" name="Current Month" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Profit Chart */}
              <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Monthly Profit Comparison</h3>
                <div className="h-60 md:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={profitData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Profit"]} />
                      <Legend />
                      <Area type="monotone" dataKey="previous" stroke="#8884d8" fill="#8884d8" name="Previous Month" />
                      <Area type="monotone" dataKey="current" stroke="#82ca9d" fill="#82ca9d" name="Current Month" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
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

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      {windowWidth <= 768 && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed z-50 top-4 left-4 p-2 rounded-md bg-white shadow-md"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {/* Sidebar - Hidden on mobile unless menu is open */}
      <div 
        className={`w-72 bg-white shadow-lg flex flex-col fixed md:relative z-40 h-full transition-all duration-300 ease-in-out ${
          windowWidth <= 768 
            ? (isMobileMenuOpen ? "translate-x-0" : "-translate-x-full") 
            : "translate-x-0"
        }`}
      >
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">BILTON</h1>
          <p className="text-sm text-gray-500 mt-1">Management Dashboard</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 ">
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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-between w-full">
              {/* User Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    Adam Smith
                  </p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="ml-4 flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && windowWidth <= 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 md:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="h-18 pl-20 md:pl-0 ">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  {getViewTitle()}
                </h1>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {getViewDescription()}
                </p>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="relative hidden sm:block">
                  <input
                    type="text"
                    placeholder={
                      currentView === "gallery"
                        ? "Search images..."
                        : `Search ${currentView}...`
                    }
                    className="w-40 md:w-64 pl-8 md:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400 absolute left-2 md:left-3 top-2.5" />
                </div>

                <button className="p-2 text-gray-400 hover:text-gray-600 relative hidden md:block">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <Bell className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                  <span className="text-sm font-medium text-gray-700">
                    BILTON
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default HotelDashboard;