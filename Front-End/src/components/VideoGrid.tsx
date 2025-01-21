import React, { useState } from 'react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  author: string;
  duration: string;
}

const VideoGrid = () => {
  const [referralId, setReferralId] = useState('');
  const [showReferralInput, setShowReferralInput] = useState(false);

  // Sample video data
  const videos: Video[] = [
    {
      id: 1,
      title: 'What to do to gain concentration',
      thumbnail: '/concentration.jpg',
      author: 'Virton',
      duration: '04:30'
    },
    {
      id: 2,
      title: 'How to drive safely',
      thumbnail: '/driving.jpg',
      author: 'Virton',
      duration: '06:15'
    },
    {
      id: 3,
      title: 'How to live without pride',
      thumbnail: '/pride.jpg',
      author: 'Virton',
      duration: '05:45'
    },
    {
      id: 4,
      title: 'How to make your children better',
      thumbnail: '/children.jpg',
      author: 'Virton',
      duration: '07:20'
    },
    {
      id: 5,
      title: 'How to Overcome Exam Fear',
      thumbnail: '/exam-fear.jpg',
      author: 'Virton',
      duration: '04:15'
    },
    {
      id: 6,
      title: 'Mind and goodness',
      thumbnail: '/mind.jpg',
      author: 'Virton',
      duration: '03:50'
    },
    {
      id: 7,
      title: 'The secret code of SUCCESS',
      thumbnail: '/success.jpg',
      author: 'Virton',
      duration: '05:30'
    },
    {
      id: 8,
      title: 'What to do to gain concentration',
      thumbnail: '/concentration-2.jpg',
      author: 'Virton',
      duration: '04:45'
    }
  ];

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle referral submission
    console.log('Referral ID submitted:', referralId);
    setShowReferralInput(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">PASIL</div>
          <div className="flex gap-4 items-center">
            <button className="px-4 py-1 text-white hover:text-gray-200">My Videos</button>
            <button className="px-4 py-1 text-white hover:text-gray-200">Virton plus</button>
            <button 
              onClick={() => setShowReferralInput(true)}
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Referral ID
            </button>
            <button className="px-4 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              Sign up
            </button>
          </div>
        </div>

        {/* Referral ID Modal */}
        {showReferralInput && (
          <div className="absolute right-4 top-16 bg-white rounded-lg shadow-xl p-4 z-10">
            <form onSubmit={handleReferralSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                value={referralId}
                onChange={(e) => setReferralId(e.target.value)}
                placeholder="123456789"
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                pattern="[0-9]*"
                maxLength={9}
                required
              />
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowReferralInput(false)}
                  className="px-3 py-1 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Thumbnail with overlay */}
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100">
                    Watch Now
                  </button>
                </div>
                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium text-lg">{video.title}</h3>
                </div>
              </div>
              {/* Video info */}
              <div className="p-4 bg-white">
                <div className="flex items-center text-sm text-gray-600">
                  <span>{video.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h2 className="text-2xl font-bold mb-4">PASIL</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optimus enim ad
                deleniti ipsum officiis alias et impedit.
              </p>
            </div>

            {/* Important Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Additional Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Additional Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300">Content Support</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>Copyright 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoGrid;
