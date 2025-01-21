import { useState, useEffect } from 'react';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  logo: string;
}

interface EditVideoProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

const EditVideo = ({ isOpen, onClose, video }: EditVideoProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: null as File | null,
    logo: null as File | null
  });

  useEffect(() => {
    if (video) {
      setFormData({
        title: video.title,
        description: video.description,
        thumbnail: null,
        logo: null
      });
    }
  }, [video]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'thumbnail' | 'logo') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[600px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">View & Edit</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Upload Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Thumbnail Image
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'thumbnail')}
                className="hidden"
                id="thumbnail-edit"
              />
              <label
                htmlFor="thumbnail-edit"
                className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {formData.thumbnail?.name || 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          {/* Upload Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Logo
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'logo')}
                className="hidden"
                id="logo-edit"
              />
              <label
                htmlFor="logo-edit"
                className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
              >
                Choose file
              </label>
              <span className="text-sm text-gray-500">
                {formData.logo?.name || 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVideo;
