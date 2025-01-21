import { useState } from 'react';

interface ViewEditUserProps {
  isOpen: boolean;
  onClose: () => void;
  userData?: {
    name: string;
    email: string;
    phone: string;
    referredBy: string;
    businessPromoters: string;
    businessIncome: string;
    status: string;
    receivePayment: string;
  };
}

const ViewEditUser = ({ isOpen, onClose, userData }: ViewEditUserProps) => {
  const [formData, setFormData] = useState(userData || {
    name: '',
    email: '',
    phone: '',
    referredBy: '',
    businessPromoters: '',
    businessIncome: '',
    status: 'Active',
    receivePayment: 'Accept'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[600px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">View & Edit List</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Referred By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Referred By</label>
              <input
                type="text"
                value={formData.referredBy}
                onChange={(e) => setFormData({...formData, referredBy: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Business Promoters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Promoters</label>
              <input
                type="text"
                value={formData.businessPromoters}
                onChange={(e) => setFormData({...formData, businessPromoters: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Business Income */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Income</label>
              <input
                type="text"
                value={formData.businessIncome}
                onChange={(e) => setFormData({...formData, businessIncome: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Receive Payment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Receive Payment</label>
              <select
                value={formData.receivePayment}
                onChange={(e) => setFormData({...formData, receivePayment: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="Accept">Accept</option>
                <option value="Reject">Reject</option>
              </select>
            </div>
          </div>

          {/* Help text */}
          <div className="mt-4 text-sm text-gray-500">
            To receive a payment issue (472, 590 and 1380)
          </div>

          {/* Submit button */}
          <div className="mt-6 flex justify-center">
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

export default ViewEditUser;
