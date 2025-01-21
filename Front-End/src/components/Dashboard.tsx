import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-[#043B64] text-white min-h-screen p-4">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Profile</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Logout</a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100">
                <h1 className="text-3xl font-semibold mb-6">Welcome to the Dashboard</h1>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">John Doe</td>
                                <td className="border px-4 py-2">john@example.com</td>
                                <td className="border px-4 py-2">Admin</td>
                                <td className="border px-4 py-2">
                                    <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2">Jane Smith</td>
                                <td className="border px-4 py-2">jane@example.com</td>
                                <td className="border px-4 py-2">User</td>
                                <td className="border px-4 py-2">
                                    <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
