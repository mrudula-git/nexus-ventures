import { useState } from 'react';
import UploadVideo from './UploadVideo';
import EditVideo from './EditVideo';
import BarChart from './BarChart';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  logo: string;
}

const VideoManagement = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: 1,
      thumbnail: '/video-thumb-1.jpg',
      title: 'What Do To Gain Concentration',
      description: 'Virton',
      logo: '/logo1.png'
    },
    {
      id: 2,
      thumbnail: '/video-thumb-2.jpg',
      title: 'The Secret Code Of Success',
      description: 'Virton',
      logo: '/logo2.png'
    },
    {
      id: 3,
      thumbnail: '/video-thumb-3.jpg',
      title: 'How To Save Money',
      description: 'Virton',
      logo: '/logo3.png'
    }
  ];

  const handleEdit = (video: Video) => {
    setSelectedVideo(video);
    setIsEditModalOpen(true);
  };

  return (
    <>
    <div className="p-6">
      {/* Dashboard Header and Graph */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">01 - 25 March, 2020</p>
        <BarChart />
      </div>

      {/* Video Management Title */}
      <h2 className="text-2xl font-semibold mb-12 border border-gray-300 inline-block px-4 py-2">
        Video Management
      </h2>

      {/* Upload Section */}
      <div className="flex flex-col items-center justify-center mb-12">
        <svg 
          className="w-24 h-24 text-gray-800 mb-4" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <h3 className="text-2xl font-medium mb-4">Upload Video</h3>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="px-6 py-2 bg-primary text-white text-lg rounded-md hover:bg-secondary transition-colors"
        >
          Upload Video
        </button>
      </div>

      {/* Manage Videos Section */}
      <div>
        <h3 className="text-xl font-medium mb-6">Manage Uploaded Videos</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Thumbnail</th>
                <th className="pb-4">Title</th>
                <th className="pb-4">Description</th>
                <th className="pb-4">Logo</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video) => (
                <tr key={video.id} className="border-t">
                  <td className="py-4">
                    <img src={video.thumbnail} alt={video.title} className="w-24 h-16 object-cover rounded" />
                  </td>
                  <td className="py-4">{video.title}</td>
                  <td className="py-4">{video.description}</td>
                  <td className="py-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      {video.logo ? (
                        <img src={video.logo} alt="Logo" className="w-6 h-6" />
                      ) : (
                        <span>N/A</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(video)}
                        className="px-3 py-1 bg-primary text-white text-sm rounded hover:bg-secondary"
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Video Modal */}
      <UploadVideo
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      {/* Edit Video Modal */}
      <EditVideo
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        video={selectedVideo}
      />
    </div>
    </>
  );
};

export default VideoManagement;
