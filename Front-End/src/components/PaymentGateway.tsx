import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentGateway = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">NEXUS VENTURES</div>
          <div className="flex gap-4">
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            <Link to="/signup" className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex">
              {/* Left side - Image */}
              <div className="w-1/2 p-6">
                <img 
                  src="/payment-card.jpg" 
                  alt="Payment Processing" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right side - Payment Form */}
              <div className="w-1/2 p-8 bg-primary text-white">
                <h2 className="text-2xl font-bold mb-6">Payment Gateway</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg mb-4">Select Payment Method</h3>
                  
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={selectedMethod === 'credit'}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className="form-radio text-blue-500 h-4 w-4"
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
                        className="form-radio text-blue-500 h-4 w-4"
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
                        className="form-radio text-blue-500 h-4 w-4"
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
                        className="form-radio text-blue-500 h-4 w-4"
                      />
                      <span>Net Banking</span>
                    </label>
                  </div>
                </div>

                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h2 className="text-2xl font-bold mb-4">NEXUS VENTURES</h2>
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

export default PaymentGateway;
