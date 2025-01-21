import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <div className="p-2">
          <div className="text-sm text-gray-600 mb-4">
            Business promoters
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
