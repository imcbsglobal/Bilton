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
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Booking Calendar</h1>
          <p className="text-sm md:text-base text-gray-600">Manage your hotel bookings and reservations</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
          <span className="text-base md:text-lg font-semibold text-gray-700">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <button
          onClick={() => navigateMonth(-1)}
          className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1" />
          <span className="hidden sm:inline">Previous</span>
        </button>
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        
        <button
          onClick={() => navigateMonth(1)}
          className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 bg-gray-50">
          {dayNames.map((dayName) => (
            <div key={dayName} className="p-2 md:p-4 text-center text-xs md:text-sm font-semibold text-gray-600 border-b">
              {dayName.substring(0, window.innerWidth < 400 ? 1 : 3)}
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
                min-h-16 md:min-h-32 p-1 md:p-2 border-b border-r border-gray-200 cursor-pointer transition-colors
                ${date ? 'hover:bg-blue-50' : 'bg-gray-50'}
                ${hasBookings(date) ? 'bg-blue-25' : ''}
              `}
            >
              {date && (
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <span className={`
                      text-xs md:text-sm font-bold
                      ${date.toDateString() === new Date().toDateString() 
                        ? 'text-blue-600 bg-blue-100 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full' 
                        : 'text-gray-900'}
                    `}>
                      {date.getDate()}
                    </span>
                    {hasBookings(date) && (
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  
                  {hasBookings(date) && (
                    <div className="hidden md:flex flex-1 space-y-1">
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
                              {window.innerWidth < 768 ? `${item.title.split(' ')[0].substring(0, 3)} (${count})` : `${item.title.split(' ')[0]} (${count})`}
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
      <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center gap-3 md:gap-6">
        <div className="flex items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm text-gray-600">Bookings</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full mr-1 md:mr-2"></div>
          <span className="text-xs md:text-sm text-gray-600">Today</span>
        </div>
      </div>

      {/* Mobile Booking Indicators */}
      <div className="mt-4 md:hidden grid grid-cols-2 gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              className={`
                flex items-center p-2 rounded-lg border border-gray-200
                ${item.hoverColor} hover:text-white hover:border-transparent
                transition-all duration-200 group
              `}
            >
              <div className={`
                w-6 h-6 ${item.color} rounded flex items-center justify-center mr-2
                group-hover:bg-white group-hover:bg-opacity-20
              `}>
                <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 group-hover:text-white">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b sticky top-0 bg-white z-10">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Booking Management Options
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6">
              {getSelectedDateData() ? (
                <div className="space-y-2 md:space-y-3">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const count = getSelectedDateData()[item.id] || 0;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleMenuItemClick(item)}
                        className={`
                          w-full flex items-center justify-between p-3 md:p-4 rounded-lg border-2 border-gray-200
                          ${item.hoverColor} hover:text-white hover:border-transparent
                          transition-all duration-200 group
                        `}
                      >
                        <div className="flex items-center">
                          <div className={`
                            w-8 h-8 md:w-10 md:h-10 ${item.color} rounded-lg flex items-center justify-center mr-2 md:mr-3
                            group-hover:bg-white group-hover:bg-opacity-20
                          `}>
                            <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-white">
                              {item.title}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 group-hover:text-white group-hover:text-opacity-80">
                              {item.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-gray-100 text-gray-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium group-hover:bg-white group-hover:bg-opacity-20 group-hover:text-white">
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6 md:py-8">
                  <Clock className="w-10 h-10 md:w-12 md:h-12 text-gray-300 mx-auto mb-3 md:mb-4" />
                  <h4 className="text-base md:text-lg font-medium text-gray-600 mb-2">No bookings for this date</h4>
                  <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Click on any option below to manage bookings</p>
                  
                  <div className="space-y-1 md:space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleMenuItemClick(item)}
                          className={`
                            w-full flex items-center p-2 md:p-3 rounded-lg border border-gray-200
                            ${item.hoverColor} hover:text-white hover:border-transparent
                            transition-all duration-200 group
                          `}
                        >
                          <div className={`
                            w-6 h-6 md:w-8 md:h-8 ${item.color} rounded flex items-center justify-center mr-2 md:mr-3
                            group-hover:bg-white group-hover:bg-opacity-20
                          `}>
                            <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </div>
                          <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-white">
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