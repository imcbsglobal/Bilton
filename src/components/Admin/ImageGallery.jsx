import { useState } from "react";
import { Image, Edit, Trash2, Eye, MoreVertical, Search, Filter, Upload, X, Plus } from "lucide-react";

const ImageGallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingImageId, setEditingImageId] = useState(null);
  const [newImage, setNewImage] = useState({
    title: "",
    category: "Common Areas",
    file: null,
    preview: null
  });
  const [editImage, setEditImage] = useState({
    title: "",
    category: "",
    url: ""
  });

  // Sample image data
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Hotel Lobby",
      category: "Common Areas",
      uploadDate: "2023-09-25",
      size: "2.4 MB",
      dimensions: "1920x1080",
      status: "Published",
      url: "/api/placeholder/400/320"
    },
    {
      id: 2,
      title: "Deluxe Room",
      category: "Rooms",
      uploadDate: "2023-09-24",
      size: "3.1 MB",
      dimensions: "1920x1080",
      status: "Published",
      url: "/api/placeholder/400/320"
    },
    {
      id: 3,
      title: "Restaurant View",
      category: "Dining",
      uploadDate: "2023-09-23",
      size: "2.8 MB",
      dimensions: "1920x1080",
      status: "Draft",
      url: "/api/placeholder/400/320"
    },
    {
      id: 4,
      title: "Pool Area",
      category: "Amenities",
      uploadDate: "2023-09-22",
      size: "3.5 MB",
      dimensions: "1920x1080",
      status: "Published",
      url: "/api/placeholder/400/320"
    },
  ]);

  const categories = ["Common Areas", "Rooms", "Dining", "Amenities", "Exterior", "Events"];

  const filteredImages = images.filter(image => {
    // Filter by search query
    if (searchQuery && !image.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by active tab
    if (activeTab === "all") return true;
    if (activeTab === "published") return image.status === "Published";
    if (activeTab === "draft") return image.status === "Draft";
    return false;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      setImages(images.filter(image => image.id !== id));
    }
  };
  
  const handleEditClick = (image) => {
    setEditingImageId(image.id);
    setEditImage({
      title: image.title,
      category: image.category,
      url: image.url
    });
    setIsEditModalOpen(true);
  };
  
  const handleSaveEdit = () => {
    setImages(images.map(image => 
      image.id === editingImageId 
        ? { ...image, title: editImage.title, category: editImage.category }
        : image
    ));
    setIsEditModalOpen(false);
    setEditingImageId(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage({
          ...newImage,
          file: file,
          preview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = () => {
    // Create a new image object
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    const newImageObj = {
      id: images.length + 1,
      title: newImage.title,
      category: newImage.category,
      uploadDate: formattedDate,
      size: newImage.file ? `${(newImage.file.size / (1024 * 1024)).toFixed(1)} MB` : "Unknown",
      dimensions: "1920x1080", // This would ideally be extracted from the actual image
      status: "Draft",
      url: newImage.preview || "/api/placeholder/400/320"
    };
    
    // Add to images array
    setImages([...images, newImageObj]);
    
    // Reset form and close modal
    setNewImage({
      title: "",
      category: "Common Areas",
      file: null,
      preview: null
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
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Image Gallery</h3>
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search - full width on mobile */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search images..."
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            
            {/* Tabs - now a dropdown on mobile */}
            <div className="md:hidden relative">
              <select
                onChange={(e) => setActiveTab(e.target.value)}
                value={activeTab}
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="all">All Images</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>

            {/* Tabs - hidden on mobile, shown on desktop */}
            <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
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
            
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center md:justify-start px-3 md:px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Add Image</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Images Table - replaced with cards on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
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
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredImages.map((image) => (
              <tr key={image.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex-shrink-0 h-16 w-16">
                    <img
                      className="h-16 w-16 rounded-md object-cover"
                      src={image.url}
                      alt={image.title}
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{image.title}</div>
                  <div className="md:hidden text-xs text-gray-500 mt-1">
                    <span className={`px-2 py-1 rounded-full ${getStatusColor(image.status)}`}>
                      {image.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{image.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{image.uploadDate}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button 
                      className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                      title="Edit"
                      onClick={() => handleEditClick(image)}
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50"
                      title="Delete"
                      onClick={() => handleDelete(image.id)}
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

      {/* Mobile Cards View */}
      <div className="md:hidden p-4 grid grid-cols-1 gap-4">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex">
              <div className="flex-shrink-0 w-24 h-24">
                <img
                  className="w-full h-full object-cover"
                  src={image.url}
                  alt={image.title}
                />
              </div>
              <div className="p-3 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{image.title}</h4>
                    <p className="text-sm text-gray-500">{image.category}</p>
                  </div>
                  <div className="flex space-x-1">
                    <button 
                      onClick={() => handleEditClick(image)}
                      className="text-blue-600 p-1"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(image.id)}
                      className="text-red-600 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{image.uploadDate}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(image.status)}`}>
                    {image.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className="p-8 md:p-12 text-center">
          <Image className="w-10 h-10 md:w-12 md:h-12 mx-auto text-gray-400" />
          <h3 className="mt-2 text-sm md:text-base font-medium text-gray-900">No images found</h3>
          <p className="mt-1 text-xs md:text-sm text-gray-500">
            {searchQuery 
              ? "Try adjusting your search or filter to find what you're looking for."
              : "Upload your first image to get started."}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2 inline" />
            Add Image
          </button>
        </div>
      )}
      
      {/* Add Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-lg font-semibold text-gray-900">Add New Image</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  {newImage.preview ? (
                    <div className="text-center">
                      <img 
                        src={newImage.preview} 
                        alt="Preview" 
                        className="mx-auto h-32 md:h-40 w-auto object-cover mb-4"
                      />
                      <button
                        type="button"
                        onClick={() => setNewImage({...newImage, file: null, preview: null})}
                        className="px-3 py-1 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-10 md:h-12 w-10 md:w-12 text-gray-400" />
                      <div className="flex flex-col md:flex-row text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="md:pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image title"
                  value={newImage.title}
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                />
              </div>
              
              {/* Category */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newImage.category}
                  onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
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
                  onClick={handleAddImage}
                  disabled={!newImage.title || !newImage.preview}
                >
                  Add Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Image Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-lg font-semibold text-gray-900">Edit Image</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              {/* Current Image Preview */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Image
                </label>
                <div className="mt-1 flex justify-center">
                  <img 
                    src={editImage.url} 
                    alt="Current image" 
                    className="h-32 md:h-40 w-auto object-cover rounded-md"
                  />
                </div>
              </div>
              
              {/* Title */}
              <div className="mb-4">
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="edit-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editImage.title}
                  onChange={(e) => setEditImage({...editImage, title: e.target.value})}
                />
              </div>
              
              {/* Category */}
              <div className="mb-4">
                <label htmlFor="edit-category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="edit-category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editImage.category}
                  onChange={(e) => setEditImage({...editImage, category: e.target.value})}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
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

export default ImageGallery;