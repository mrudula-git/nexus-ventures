import React, { useState } from 'react';
import { UserIcon, PhoneIcon, MailIcon, LockClosedIcon, KeyIcon, GlobeAltIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
    interface FormData {
        firstName: string;
        lastName: string;
        contactNo: string;
        whatsappNo: string;
        email: string;
        state: string;
        referralCode: string;
        password: string;
    }
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        contactNo: '',
        whatsappNo: '',
        email: '',
        state: '',
        referralCode: '',
        password: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {} as any;

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.contactNo.trim() || !/^\d{10}$/.test(formData.contactNo)) newErrors.contactNo = 'Valid contact number is required';
        if (formData.whatsappNo && !/^\d{10}$/.test(formData.whatsappNo)) newErrors.whatsappNo = 'Valid WhatsApp number is required';
        if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.password.trim() || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setSuccess('');

        if (!validateForm()) return;

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setSuccess('Registration successful! You can now log in.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    contactNo: '',
                    whatsappNo: '',
                    email: '',
                    state: '',
                    referralCode: '',
                    password: '',
                });
            } else {
                setErrors({ general: result.message || 'Something went wrong!' });
            }
        } catch (err) {
            console.log(err)
            setErrors({ general: 'Failed to submit. Please try again later.' });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-stretch max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden my-20">
            <div className="hidden lg:block w-full lg:w-1/2">
                <img
                    src="/login.jpg"
                    alt="Registration illustration"
                    className="w-full h-full object-cover rounded-l-lg"
                />
            </div>
            <div className="w-full lg:w-1/2 p-8 bg-[#043B64]">
                <h2 className="text-[38px] font-bold text-center text-white">Sign up</h2>
                <p className="mb-6 text-white">Fill in your credentials and click on the Sign up button</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name and Last Name on the same row */}
                    <div className="flex space-x-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded`}
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <UserIcon className="w-5 h-5 text-blue-500" />
                            </span>
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>
                        <div className="relative w-full">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded`}
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <UserIcon className="w-5 h-5 text-blue-500" />
                            </span>
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                    </div>

                    {/* Contact Number */}
                    <div className="relative">
                        <input
                            type="text"
                            name="contactNo"
                            placeholder="Contact No"
                            value={formData.contactNo}
                            onChange={handleChange}
                            className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.contactNo ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <PhoneIcon className="w-5 h-5 text-blue-500" />
                        </span>
                        {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo}</p>}
                    </div>

                    {/* WhatsApp Number */}
                    <div className="relative">
                        <input
                            type="text"
                            name="whatsappNo"
                            placeholder="WhatsApp No"
                            value={formData.whatsappNo}
                            onChange={handleChange}
                            className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.whatsappNo ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <PhoneIcon className="w-5 h-5 text-blue-500" />
                        </span>
                        {errors.whatsappNo && <p className="text-red-500 text-sm">{errors.whatsappNo}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <MailIcon className="w-5 h-5 text-blue-500" />
                        </span>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* State */}
                    <div className="relative">
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <GlobeAltIcon className="w-5 h-5 text-blue-500" />
                        </span>
                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>

                    {/* Referral Code */}
                    <div className="relative">
                        <input
                            type="text"
                            name="referralCode"
                            placeholder="Referral Code"
                            value={formData.referralCode}
                            onChange={handleChange}
                            className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.referralCode ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <KeyIcon className="w-5 h-5 text-blue-500" />
                        </span>
                        {errors.referralCode && <p className="text-red-500 text-sm">{errors.referralCode}</p>}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full p-2 pl-10 pr-10 border focus:border-blue-500 focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <LockClosedIcon className="w-5 h-5 text-blue-500" />
                        </span>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center">
                        <input type="checkbox" required className="mr-2" />
                        <span className="text-white">I agree to the Terms and Conditions and Privacy Policy</span>
                    </div>

                    {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-2 border border-white rounded hover:bg-gray-800"
                        >
                            Register
                        </button>
                        <button
                            type="button"
                            className="w-full bg-transparent text-white p-2 border border-white rounded hover:bg-white hover:text-black"
                            onClick={() => navigate('/login')} // Use navigate to redirect to the LoginForm page
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
