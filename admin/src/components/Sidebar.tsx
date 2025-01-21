import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { title: 'User List', path: '/users' },
    { title: 'Transaction List', path: '/transactions' },
    { title: 'Video Management', path: '/videos' },
    { title: 'Top Receivers List', path: '/top-receivers' },
  ];

  return (
    <div className="bg-primary w-64 min-h-screen text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">virton+</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-6 py-3 hover:bg-secondary ${
              location.pathname === item.path ? 'bg-secondary' : ''
            }`}
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/logout"
          className="block px-6 py-3 hover:bg-secondary mt-4"
        >
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V7z" clipRule="evenodd" />
            </svg>
            Logout
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
