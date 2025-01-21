import { useState } from 'react';

interface Transaction {
  order: string;
  date: string;
  shipped: string;
  currency: string;
  grossAmount: string;
  paymentGatewayFees: string;
  paymentGatewayTax: string;
  tds: string;
  amountPayable: string;
  customerName: string;
}

const TransactionList = () => {
  const [selectedMonth, setSelectedMonth] = useState('November 2024');
  
  const transactions: Transaction[] = [
    {
      order: '75459',
      date: '28-08-24',
      shipped: 'Shipped',
      currency: 'INR',
      grossAmount: '472',
      paymentGatewayFees: '654',
      paymentGatewayTax: '17',
      tds: '0',
      amountPayable: '450',
      customerName: 'Johnson'
    },
    {
      order: '75455',
      date: '28-08-24',
      shipped: 'Shipped',
      currency: 'INR',
      grossAmount: '472',
      paymentGatewayFees: '654',
      paymentGatewayTax: '17',
      tds: '0',
      amountPayable: '450',
      customerName: 'James'
    },
    {
      order: '75453',
      date: '28-08-24',
      shipped: 'Shipped',
      currency: 'INR',
      grossAmount: '472',
      paymentGatewayFees: '654',
      paymentGatewayTax: '17',
      tds: '0',
      amountPayable: '450',
      customerName: 'James'
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Transaction List</h2>
          <div className="flex gap-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="November 2024">November 2024</option>
              <option value="December 2024">December 2024</option>
            </select>
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">
              Download
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Order</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Shipped</th>
                <th className="px-4 py-2 text-left">Currency</th>
                <th className="px-4 py-2 text-left">Gross Amount</th>
                <th className="px-4 py-2 text-left">Payment gateway fees</th>
                <th className="px-4 py-2 text-left">Payment gateway tax</th>
                <th className="px-4 py-2 text-left">TDS</th>
                <th className="px-4 py-2 text-left">Amount Payable</th>
                <th className="px-4 py-2 text-left">Customer</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{transaction.order}</td>
                  <td className="px-4 py-2">{transaction.date}</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {transaction.shipped}
                    </span>
                  </td>
                  <td className="px-4 py-2">{transaction.currency}</td>
                  <td className="px-4 py-2">{transaction.grossAmount}</td>
                  <td className="px-4 py-2">{transaction.paymentGatewayFees}</td>
                  <td className="px-4 py-2">{transaction.paymentGatewayTax}</td>
                  <td className="px-4 py-2">{transaction.tds}</td>
                  <td className="px-4 py-2">{transaction.amountPayable}</td>
                  <td className="px-4 py-2">{transaction.customerName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
