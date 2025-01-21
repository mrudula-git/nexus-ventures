import { useState } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
  status: string;
}

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users: User[] = [
    {
      name: 'Poulmi',
      email: 'shinmonsxapp@gmail.com',
      phone: '9056565676',
      status: 'Active'
    },
    {
      name: 'Shimna',
      email: 'lkoudy7@gmail.com',
      phone: '7034614957',
      status: 'Active'
    },
    {
      name: 'Sanaya',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      status: 'Active'
    },
    {
      name: 'Nishesh Kumar',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      status: 'Active'
    },
    {
      name: 'Tust',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      status: 'Active'
    },
    {
      name: 'Liven',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      status: 'Active'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-600">01 - 25 March 2020</p>
        
        {/* Graph placeholder */}
        <div className="h-32 bg-gray-100 rounded-lg mt-4 mb-8">
          {/* Add your graph component here */}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-3">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Phone</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3">{user.name}</td>
                  <td className="py-3">{user.email}</td>
                  <td className="py-3">{user.phone}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="px-4 py-1 bg-primary text-white rounded hover:bg-secondary">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
