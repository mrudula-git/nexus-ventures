import React, { useState } from 'react';
import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<any>({});
    const [success, setSuccess] = useState('');

    const validateForm = () => {
        const newErrors = {} as any;

        if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }
        if (!formData.password.trim() || formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

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
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setSuccess('Login successful!');
                setFormData({
                    email: '',
                    password: '',
                });
            } else {
                setErrors({ general: result.message || 'Something went wrong!' });
            }
        } catch (err: any) {
            setErrors({ general: 'Failed to submit. Please try again later.' });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-stretch max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden my-20">
            {/* Left Side Image */}
            <div className="hidden lg:block w-full lg:w-1/2">
                <img
                    src="/sign-in.jpg"
                    alt="Login illustration"
                    className="w-full h-full object-cover rounded-l-lg"
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full lg:w-1/2 p-8 bg-[#043B64]">
                <h2 className="text-[38px] font-bold text-center text-white">Log In</h2>
                <p className="mb-6 text-white">Please enter your credentials to log in</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
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

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="/forgot-password" className="text-blue-500 text-sm">Forgot Password?</a>
                    </div>

                    {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-2 border border-white rounded hover:bg-gray-800"
                        >
                            Log In
                        </button>
                    </div>
                </form>

                {/* Don't have an account? Sign up link */}
                <div className="mt-4 text-center text-white">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <a href="/register" className="text-blue-500 hover:text-blue-300">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
