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
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Image Gallery</h3>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search images..."
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
              Add Image
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
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
      
      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className="p-12 text-center">
          <Image className="w-12 h-12 mx-auto text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No images found</h3>
          <p className="mt-1 text-sm text-gray-500">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Add New Image</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Upload */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  {newImage.preview ? (
                    <div className="text-center">
                      <img 
                        src={newImage.preview} 
                        alt="Preview" 
                        className="mx-auto h-40 w-auto object-cover mb-4"
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
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
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
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
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
                  placeholder="Enter image title"
                  value={newImage.title}
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Edit Image</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Current Image Preview */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Image
                </label>
                <div className="mt-1 flex justify-center">
                  <img 
                    src={editImage.url} 
                    alt="Current image" 
                    className="h-40 w-auto object-cover rounded-md"
                  />
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
                  value={editImage.title}
                  onChange={(e) => setEditImage({...editImage, title: e.target.value})}
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