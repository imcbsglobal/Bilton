import { useState } from "react";
import { Video, Edit, Trash2, Eye, MoreVertical, Search, Filter, Upload, X, Plus, Play, Pause } from "lucide-react";

const VideoGallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingVideoId, setEditingVideoId] = useState(null);
  const [newVideo, setNewVideo] = useState({
    title: "",
    category: "Marketing",
    file: null,
    preview: null,
    duration: ""
  });
  const [editVideo, setEditVideo] = useState({
    title: "",
    category: "",
    url: "",
    duration: ""
  });

  // Sample video data
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Hotel Promotional Video",
      category: "Marketing",
      uploadDate: "2023-09-25",
      size: "24.4 MB",
      duration: "1:45",
      status: "Published",
      url: "/api/placeholder/400/320",
      thumbnailUrl: "/api/placeholder/400/320"
    },
    {
      id: 2,
      title: "Room Tour - Deluxe Suite",
      category: "Room Tours",
      uploadDate: "2023-09-24",
      size: "31.1 MB",
      duration: "2:30",
      status: "Published",
      url: "/api/placeholder/400/320",
      thumbnailUrl: "/api/placeholder/400/320"
    },
    {
      id: 3,
      title: "Chef's Special Preparation",
      category: "Dining",
      uploadDate: "2023-09-23",
      size: "18.8 MB",
      duration: "3:22",
      status: "Draft",
      url: "/api/placeholder/400/320",
      thumbnailUrl: "/api/placeholder/400/320"
    },
    {
      id: 4,
      title: "Spa and Wellness Center",
      category: "Amenities",
      uploadDate: "2023-09-22",
      size: "15.5 MB",
      duration: "2:10",
      status: "Published",
      url: "/api/placeholder/400/320",
      thumbnailUrl: "/api/placeholder/400/320"
    },
  ]);

  const categories = ["Marketing", "Room Tours", "Dining", "Amenities", "Events", "Testimonials"];

  const filteredVideos = videos.filter(video => {
    // Filter by search query
    if (searchQuery && !video.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by active tab
    if (activeTab === "all") return true;
    if (activeTab === "published") return video.status === "Published";
    if (activeTab === "draft") return video.status === "Draft";
    return false;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      setVideos(videos.filter(video => video.id !== id));
    }
  };
  
  const handleEditClick = (video) => {
    setEditingVideoId(video.id);
    setEditVideo({
      title: video.title,
      category: video.category,
      url: video.thumbnailUrl,
      duration: video.duration
    });
    setIsEditModalOpen(true);
  };
  
  const handleSaveEdit = () => {
    setVideos(videos.map(video => 
      video.id === editingVideoId 
        ? { ...video, title: editVideo.title, category: editVideo.category }
        : video
    ));
    setIsEditModalOpen(false);
    setEditingVideoId(null);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For a real implementation, you would handle video upload differently
      // and potentially extract metadata like duration
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewVideo({
          ...newVideo,
          file: file,
          preview: reader.result,
          duration: "0:00" // In a real app, you'd extract actual duration
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVideo = () => {
    // Create a new video object
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    const newVideoObj = {
      id: videos.length + 1,
      title: newVideo.title,
      category: newVideo.category,
      uploadDate: formattedDate,
      size: newVideo.file ? `${(newVideo.file.size / (1024 * 1024)).toFixed(1)} MB` : "Unknown",
      duration: newVideo.duration || "0:00",
      status: "Draft",
      url: newVideo.preview || "/api/placeholder/400/320",
      thumbnailUrl: newVideo.preview || "/api/placeholder/400/320"
    };
    
    // Add to videos array
    setVideos([...videos, newVideoObj]);
    
    // Reset form and close modal
    setNewVideo({
      title: "",
      category: "Marketing",
      file: null,
      preview: null,
      duration: ""
    });
    setIsModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-800";
      case "Draft": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Video Gallery</h3>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            
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
                onClick={() => setActiveTab("published")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "published"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Published
              </button>
              <button
                onClick={() => setActiveTab("draft")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "draft"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Draft
              </button>
            </div>
            
            <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Video
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thumbnail
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upload Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVideos.map((video) => (
              <tr key={video.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex-shrink-0 h-16 w-28 relative group">
                    <img
                      className="h-16 w-28 rounded-md object-cover"
                      src={video.thumbnailUrl}
                      alt={video.title}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{video.title}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{video.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{video.uploadDate}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{video.duration}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button 
                      className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                      title="Edit"
                      onClick={() => handleEditClick(video)}
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50"
                      title="Delete"
                      onClick={() => handleDelete(video.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-gray-600 hover:text-gray-800 p-1 rounded-md hover:bg-gray-50"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Empty state */}
      {filteredVideos.length === 0 && (
        <div className="p-12 text-center">
          <Video className="w-12 h-12 mx-auto text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No videos found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchQuery 
              ? "Try adjusting your search or filter to find what you're looking for."
              : "Upload your first video to get started."}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2 inline" />
            Add Video
          </button>
        </div>
      )}
      
      {/* Add Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Add New Video</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Video Upload */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Video
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  {newVideo.preview ? (
                    <div className="text-center">
                      <div className="mx-auto h-40 w-auto relative mb-4">
                        {/* Using img as a thumbnail representation for simplicity */}
                        <img 
                          src={newVideo.preview} 
                          alt="Video Preview" 
                          className="h-40 w-auto object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {newVideo.file?.name}
                      </div>
                      <button
                        type="button"
                        onClick={() => setNewVideo({...newVideo, file: null, preview: null})}
                        className="px-3 py-1 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <Video className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="video-upload"
                          className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                        >
                          <span>Upload a video</span>
                          <input
                            id="video-upload"
                            name="video-upload"
                            type="file"
                            className="sr-only"
                            accept="video/*"
                            onChange={handleVideoChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        MP4, MOV, AVI up to 100MB
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Title */}
              <div className="mb-5">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter video title"
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                />
              </div>
              
              {/* Category */}
              <div className="mb-5">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newVideo.category}
                  onChange={(e) => setNewVideo({...newVideo, category: e.target.value})}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration (in a real app, this would be extracted from the video) */}
              <div className="mb-5">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (mm:ss)
                </label>
                <input
                  type="text"
                  id="duration"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 2:30"
                  value={newVideo.duration}
                  onChange={(e) => setNewVideo({...newVideo, duration: e.target.value})}
                />
              </div>
              
              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                  onClick={handleAddVideo}
                  disabled={!newVideo.title || !newVideo.preview}
                >
                  Add Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Video Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Edit Video</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Current Video Preview */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Video
                </label>
                <div className="mt-1 flex justify-center">
                  <div className="relative">
                    <img 
                      src={editVideo.url} 
                      alt="Current video" 
                      className="h-40 w-auto object-cover rounded-md"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <div className="mb-5">
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="edit-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editVideo.title}
                  onChange={(e) => setEditVideo({...editVideo, title: e.target.value})}
                />
              </div>
              
              {/* Category */}
              <div className="mb-5">
                <label htmlFor="edit-category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="edit-category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editVideo.category}
                  onChange={(e) => setEditVideo({...editVideo, category: e.target.value})}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration (in a real app, this would be extracted from the video) */}
              <div className="mb-5">
                <label htmlFor="edit-duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (mm:ss)
                </label>
                <input
                  type="text"
                  id="edit-duration"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editVideo.duration}
                  onChange={(e) => setEditVideo({...editVideo, duration: e.target.value})}
                />
              </div>
              
              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={handleSaveEdit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default VideoGallery;