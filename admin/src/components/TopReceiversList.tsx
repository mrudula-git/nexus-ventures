import { useState } from 'react';

interface Receiver {
  name: string;
  email: string;
  phone: string;
  state: string;
  totalIncome: string;
  noOfPromoters: number;
}

const TopReceiversList = () => {
  const receivers: Receiver[] = [
    {
      name: 'Poulmi',
      email: 'shinmonsxapp@gmail.com',
      phone: '9056565676',
      state: 'karnataka',
      totalIncome: '650000',
      noOfPromoters: 120
    },
    {
      name: 'Shimna',
      email: 'lkoudy7@gmail.com',
      phone: '7034614957',
      state: 'karnataka',
      totalIncome: '550000',
      noOfPromoters: 90
    },
    {
      name: 'Sanaya',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      state: 'tamil Nadu',
      totalIncome: '250000',
      noOfPromoters: 45
    },
    {
      name: 'Nishesh Kumar',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      state: 'karnataka',
      totalIncome: '250000',
      noOfPromoters: 85
    },
    {
      name: 'Tust',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      state: 'karnataka',
      totalIncome: '150000',
      noOfPromoters: 45
    },
    {
      name: 'Liven',
      email: 'lkoudy7@gmail.com',
      phone: '9037580037',
      state: 'karnataka',
      totalIncome: '350000',
      noOfPromoters: 77
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-600">01 - 25 March, 2020</p>
        
        {/* Graph placeholder */}
        <div className="h-32 bg-gray-100 rounded-lg mt-4 mb-8">
          {/* Add your graph component here */}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Top Receivers List</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Phone</th>
                <th className="pb-3">State</th>
                <th className="pb-3">Total Income</th>
                <th className="pb-3">No. of Promoters</th>
              </tr>
            </thead>
            <tbody>
              {receivers.map((receiver, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">{receiver.name}</td>
                  <td className="py-3">{receiver.email}</td>
                  <td className="py-3">{receiver.phone}</td>
                  <td className="py-3 capitalize">{receiver.state}</td>
                  <td className="py-3">₹{receiver.totalIncome}</td>
                  <td className="py-3">{receiver.noOfPromoters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopReceiversList;
