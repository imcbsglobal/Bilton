import React, { useState } from "react";
import { Search, Plus, Trash2, X, MessageSquare, Edit } from "lucide-react";

const TestimonialsView = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Traveler",
      rating: 5,
      comment:
        "The service was exceptional! The staff went above and beyond to make my stay comfortable.",
      date: "2023-10-15",
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Honeymooner",
      rating: 4,
      comment: "Beautiful rooms and great amenities. The spa was particularly relaxing.",
      date: "2023-09-28",
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Family Vacation",
      rating: 5,
      comment: "Perfect for families! The kids loved the pool and the staff was so accommodating.",
      date: "2023-11-02",
      avatar: "/api/placeholder/100/100",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    rating: 5,
    comment: "",
  });
  const [editTestimonial, setEditTestimonial] = useState({
    name: "",
    role: "",
    rating: 5,
    comment: "",
  });

  const filteredTestimonials = testimonials.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Delete this testimonial?")) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
    }
  };

  const handleEditClick = (testimonial) => {
    setEditingTestimonialId(testimonial.id);
    setEditTestimonial({
      name: testimonial.name,
      role: testimonial.role,
      rating: testimonial.rating,
      comment: testimonial.comment,
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === editingTestimonialId 
        ? { 
            ...testimonial, 
            name: editTestimonial.name,
            role: editTestimonial.role,
            rating: editTestimonial.rating,
            comment: editTestimonial.comment
          }
        : testimonial
    ));
    setIsEditModalOpen(false);
    setEditingTestimonialId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...testimonials.map((t) => t.id), 0) + 1;
    const today = new Date().toISOString().split("T")[0];
    setTestimonials([
      ...testimonials,
      {
        ...newTestimonial,
        id: newId,
        date: today,
        avatar: "/api/placeholder/100/100",
      },
    ]);
    setNewTestimonial({
      name: "",
      role: "",
      rating: 5,
      comment: "",
    });
    setIsModalOpen(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Guest Testimonials</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Testimonial
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3 mb-4">
        <input
          type="text"
          placeholder="Search..."
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
              <th className="p-3">Guest</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Comment</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {filteredTestimonials.length ? (
              filteredTestimonials.map((t) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center space-x-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-gray-500">{t.role}</div>
                    </div>
                  </td>
                  <td className="p-3">{renderStars(t.rating)}</td>
                  <td className="p-3 max-w-xs">{t.comment}</td>
                  <td className="p-3">{t.date}</td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditClick(t)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(t.id)}
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
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  <MessageSquare className="mx-auto mb-2 w-6 h-6" />
                  No testimonials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Testimonial Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Add Testimonial</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Guest Name"
              value={newTestimonial.name}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, name: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Guest Role"
              value={newTestimonial.role}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, role: e.target.value })
              }
            />
            <textarea
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Comment"
              value={newTestimonial.comment}
              onChange={(e) =>
                setNewTestimonial({ ...newTestimonial, comment: e.target.value })
              }
            />
            <div className="mb-3 flex space-x-1 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() =>
                    setNewTestimonial({ ...newTestimonial, rating: star })
                  }
                  className={
                    star <= newTestimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                >
                  ★
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Testimonial Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Edit Testimonial</h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Guest Name"
              value={editTestimonial.name}
              onChange={(e) =>
                setEditTestimonial({ ...editTestimonial, name: e.target.value })
              }
            />
            <input
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Guest Role"
              value={editTestimonial.role}
              onChange={(e) =>
                setEditTestimonial({ ...editTestimonial, role: e.target.value })
              }
            />
            <textarea
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Comment"
              value={editTestimonial.comment}
              onChange={(e) =>
                setEditTestimonial({ ...editTestimonial, comment: e.target.value })
              }
            />
            <div className="mb-3 flex space-x-1 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() =>
                    setEditTestimonial({ ...editTestimonial, rating: star })
                  }
                  className={
                    star <= editTestimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                >
                  ★
                </button>
              ))}
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

export default TestimonialsView;