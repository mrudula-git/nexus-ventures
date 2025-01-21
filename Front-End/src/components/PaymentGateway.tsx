import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const PaymentGateway = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            {/* Left side - Image */}
            <div className="w-1/2">
              <img
                src="/payment-card.jpg"
                alt="Payment Processing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Payment Form */}
            <div className="w-1/2 bg-primary text-white p-8">
              <h2 className="text-2xl font-semibold mb-8">Payment Gateway</h2>

              <div className="space-y-6">
                <h3 className="text-xl mb-4">Select Payment Method</h3>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={selectedMethod === 'credit'}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="form-radio text-white border-white focus:ring-white"
                    />
                    <span>Credit/Debit Card</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={selectedMethod === 'upi'}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="form-radio text-white border-white focus:ring-white"
                    />
                    <span>UPI</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="wallets"
                      checked={selectedMethod === 'wallets'}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="form-radio text-white border-white focus:ring-white"
                    />
                    <span>Wallets</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={selectedMethod === 'netbanking'}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="form-radio text-white border-white focus:ring-white"
                    />
                    <span>Net Banking</span>
                  </label>
                </div>

                {/* Confirm Button */}
                <button
                  className="w-full bg-black text-white py-3 rounded mt-8 hover:bg-gray-900 transition-colors"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaymentGateway;
