import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Eye, 
  Edit, 
  Plus, 
  CheckSquare, 
  Building,
  X,
  Clock,
  User,
  Bed
} from "lucide-react";

const BookingCalendar = ({ onNavigate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample booking data
  const bookingData = {
    '2024-12-15': {
      viewBookings: 12,
      offlineBookings: 3,
      manageBooking: 8,
      bookingRequests: 5,
      roomManagement: 15
    },
    '2024-12-20': {
      viewBookings: 8,
      offlineBookings: 2,
      manageBooking: 6,
      bookingRequests: 3,
      roomManagement: 12
    },
    '2024-12-25': {
      viewBookings: 20,
      offlineBookings: 5,
      manageBooking: 15,
      bookingRequests: 8,
      roomManagement: 25
    },
    '2024-12-31': {
      viewBookings: 25,
      offlineBookings: 7,
      manageBooking: 20,
      bookingRequests: 12,
      roomManagement: 30
    }
  };

  const menuItems = [
    {
      id: 'bookings',
      title: 'View Bookings',
      icon: Eye,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      description: 'View all current bookings',
      dashboardId: 'bookings'
    },
    {
      id: 'offlineBookings',
      title: 'Offline Bookings',
      icon: Edit,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      description: 'Manage offline reservations',
      dashboardId: 'offline-bookings'
    },
    {
      id: 'manageBooking',
      title: 'Manage Booking',
      icon: Plus,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      description: 'Create and modify bookings',
      dashboardId: 'create-booking'
    },
    {
      id: 'bookingRequests',
      title: 'Booking Requests',
      icon: CheckSquare,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      description: 'Review pending requests',
      dashboardId: 'requests'
    },
    {
      id: 'roomManagement',
      title: 'Room Management',
      icon: Building,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      description: 'Manage room availability',
      dashboardId: 'rooms'
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const formatDateKey = (date) => {
    return date.toISOString().split('T')[0];
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date) => {
    if (date) {
      setSelectedDate(date);
      setIsModalOpen(true);
    }
  };

  const handleMenuItemClick = (menuItem) => {
    if (onNavigate) {
      onNavigate(menuItem.dashboardId);
    }
    setIsModalOpen(false);
  };

  const getDateBookingCount = (date) => {
    if (!date) return 0;
    const dateKey = formatDateKey(date);
    const data = bookingData[dateKey];
    if (!data) return 0;
    return Object.values(data).reduce((sum, count) => sum + count, 0);
  };

  const hasBookings = (date) => {
    if (!date) return false;
    const dateKey = formatDateKey(date);
    return bookingData[dateKey] !== undefined;
  };

  const getSelectedDateData = (dateParam = null) => {
    const targetDate = dateParam || selectedDate;
    if (!targetDate) return null;
    const dateKey = formatDateKey(targetDate);
    return bookingData[dateKey];
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Booking Calendar</h1>
          <p className="text-gray-600">Manage your hotel bookings and reservations</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-700">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigateMonth(-1)}
          className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>
        
        <h2 className="text-xl font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        
        <button
          onClick={() => navigateMonth(1)}
          className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 bg-gray-50">
          {dayNames.map((dayName) => (
            <div key={dayName} className="p-4 text-center font-semibold text-gray-600 border-b">
              {dayName}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {days.map((date, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              className={`
                min-h-32 p-2 border-b border-r border-gray-200 cursor-pointer transition-colors
                ${date ? 'hover:bg-blue-50' : 'bg-gray-50'}
                ${hasBookings(date) ? 'bg-blue-25' : ''}
              `}
            >
              {date && (
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`
                      text-sm font-bold
                      ${date.toDateString() === new Date().toDateString() 
                        ? 'text-blue-600 bg-blue-100 px-2 py-1 rounded-full' 
                        : 'text-gray-900'}
                    `}>
                      {date.getDate()}
                    </span>
                    {hasBookings(date) && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  
                  {hasBookings(date) && (
                    <div className="flex-1 space-y-1">
                      {menuItems.map((item) => {
                        const count = getSelectedDateData(date)?.[item.id] || 0;
                        if (count > 0) {
                          return (
                            <button
                              key={item.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMenuItemClick(item);
                              }}
                              className={`
                                w-full text-xs ${item.color.replace('bg-', 'bg-opacity-10 bg-')} 
                                ${item.color.replace('bg-', 'text-').replace('-500', '-700')}
                                px-1 py-0.5 rounded text-center font-medium
                                hover:${item.color.replace('bg-', 'bg-opacity-20 bg-')}
                                transition-colors cursor-pointer
                              `}
                            >
                              {item.title.split(' ')[0]} ({count})
                            </button>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Has Bookings</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Today</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md m-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Booking Management Options
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {getSelectedDateData() ? (
                <div className="space-y-3">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const count = getSelectedDateData()[item.id] || 0;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleMenuItemClick(item)}
                        className={`
                          w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200
                          ${item.hoverColor} hover:text-white hover:border-transparent
                          transition-all duration-200 group
                        `}
                      >
                        <div className="flex items-center">
                          <div className={`
                            w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mr-3
                            group-hover:bg-white group-hover:bg-opacity-20
                          `}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-800 group-hover:text-white">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500 group-hover:text-white group-hover:text-opacity-80">
                              {item.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-white group-hover:bg-opacity-20 group-hover:text-white">
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-600 mb-2">No bookings for this date</h4>
                  <p className="text-gray-500 mb-4">Click on any option below to manage bookings</p>
                  
                  <div className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleMenuItemClick(item)}
                          className={`
                            w-full flex items-center p-3 rounded-lg border border-gray-200
                            ${item.hoverColor} hover:text-white hover:border-transparent
                            transition-all duration-200 group
                          `}
                        >
                          <div className={`
                            w-8 h-8 ${item.color} rounded flex items-center justify-center mr-3
                            group-hover:bg-white group-hover:bg-opacity-20
                          `}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-700 group-hover:text-white">
                            {item.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;